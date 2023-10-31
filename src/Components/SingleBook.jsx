import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';

// Crea un componente SingleBook utilizzando una funzione. 
// Questo componente  dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, 
// e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap 
// (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).

// function SingleBook(props) {
//   //props è l'oggetto che contiene book
//   return (
//             <Col sm={6} md={3} className="mb-5" key={props.book.asin}>
//           <Card>
//             <Card.Img variant="top" src={props.book.img} />
//             <Card.Body>
//               <Card.Title>{props.book.title}</Card.Title>
//             </Card.Body>
//           </Card>
//           </Col>
//   );
// }

// export default SingleBook;

//Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana selected.
class SingleBook extends Component {
    state = {
        selected: false,
    };

// getComment = () => {
//   fetch("https://striveschool-api.herokuapp.com/api/comments", {
// headers: {
// Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNWEwYWY2ZTNkZDAwMTQ5NWU0NDAiLCJpYXQiOjE2OTgzMjI5NTUsImV4cCI6MTY5OTUzMjU1NX0.S3XpwGJo4mZ-c_9SYaND43OlA5okJ3bKNQI-4jLShDA"
// },
// })
// .then((res)=>{
//   if (res.ok){
//     console.log("ok", res)
//   } else {
//     throw new Error ("errore")
//   }
// })
// .then((data)=>{
//   console.log("dati", data)
// })
// .catch((err)=>{
//   console.log("err", err)
// })
// }

    render(){
        return (
           <>
             
              
                  <Col xs={4} className="mb-5" key={this.props.book.asin}>
                    <Card onClick = {()=> {this.setState({selected: !this.state.selected})
                    this.props.changeAsin(this.props.book.asin)}} 
                    // className={this.state.selected ? 'border-danger  border-3' : "" }
                     className={this.props.book.asin === this.props.selectedAsin ? 'border-danger  border-3' : "" }
                    >
                      <Card.Img variant="top" src={this.props.book.img} />
                      <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                {/* <Col xs={6}>
                     { this.state.selected && <CommentArea bookId={this.props.book.asin}/> }
                </Col> */}
              
           </>
        );
    }
  }
  export default SingleBook;

//   style="border-color:red"

