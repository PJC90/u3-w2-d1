import { Component } from "react";
import { Button, Form } from "react-bootstrap";

//AddComponent avrà un form, e quindi deve essere una CLASSE perchè ci sarà bisogno di uno stato che memorizza i valori del form
class AddComment extends Component{

state = {
    commentObject:{
        comment:"",
        rate:"1",
        elementId: this.props.bookId
    },
}

sendNewReview = async (e) =>{
e.preventDefault()
//adesso si fa la fetch x fare la chiamata di tipo post per salvare il commento
try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/",
        {   method:"POST",
        body: JSON.stringify(this.state.commentObject),
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWEwYWY2ZTNkZDAwMTQ5NWU0NDAiLCJpYXQiOjE2OTgzMjI5NTUsImV4cCI6MTY5OTUzMjU1NX0.S3XpwGJo4mZ-c_9SYaND43OlA5okJ3bKNQI-4jLShDA",
                "Content-Type": "application/json"
            },
        })
        if(response.ok){
            alert("commento salvato!")
        }else{
            throw new Error("error nel salvataggio commento")
        }
} catch (error) {
    console.log("error", error)
}
}

render(){
    return(
        <Form className="mt-3" onSubmit={this.sendNewReview}>
        <Form.Group className="my-3" >
          <Form.Label>Commento</Form.Label>
          <Form.Control type="text" 
          required
          value={this.state.commentObject.comment}  
          onChange={(e)=>{
            this.setState({
                commentObject:{
            ...this.state.commentObject,
            comment: e.target.value,
          }})}} />
         
        </Form.Group>
  
        <Form.Group className="mb-3" >
          <Form.Label>Rating</Form.Label>
            <Form.Select aria-label="comment rating"
            value={this.state.commentObject.comment}
            onChange={(e)=>{
                this.setState({
                    commentObject:{
                ...this.state.commentObject,
                rate: e.target.value,
              }})}}
            >
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
             </Form.Select>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    )
}
}

export default AddComment