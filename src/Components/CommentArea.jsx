import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Col, Row } from "react-bootstrap";

class CommentArea extends Component{

state = {
    comments: []
}
// non mi serve + perchè mi serve un metodo che si aggiorna ogni volta che cambio libro
// componentDidMount = ()=>{
//     //viene eseguito usa sola volta
//     // ora faremo la fetch per recuperare i commenti
//     if(this.props.bookId){ //questo perchè ho messo <CommentArea bookId={null}/> in booklist x evitare che tutti i commenti mi appaiono sulla pagina all'inizio senza che nessuna card è selezionata
//         this.getComments()
//     }
// }
componentDidUpdate(prevProps, prevState){
    if(prevProps.bookId !== this.props.bookId){
        // faccio la fetch quando viene cambiato il bookId
        this.getComments()
    }
}

getComments = async()=>{
    try{
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookId,
        {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWEwYWY2ZTNkZDAwMTQ5NWU0NDAiLCJpYXQiOjE2OTgzMjI5NTUsImV4cCI6MTY5OTUzMjU1NX0.S3XpwGJo4mZ-c_9SYaND43OlA5okJ3bKNQI-4jLShDA"
                },
        })
        if(response.ok){
            const arrayOfComponents = await response.json()
            console.log(arrayOfComponents)
            //ora con setState salviamo i commenti nell'array comments 
            this.setState({
                comments: arrayOfComponents
            })
        } else{
            throw new Error("errore nel recupero dei commenti")
        }
    }catch(error){
        console.log("error",error)
    }
}

    render(){
        return(
            <Row className="d-flex justify-content-center">
                <Col >
                <div><CommentList reviews={this.state.comments}/></div>
                <div><AddComment bookId={this.props.bookId}/></div>
                </Col>
            </Row>
        )
    }
}

export default CommentArea