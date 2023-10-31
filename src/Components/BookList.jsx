import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";


//mi serve uno stato per salvare la stringa di ricerca quindi la funzione non mi va bene più e mi serve una classe
// function BookList(props) {
//   //troverò manyBooks su props.manyBooks
//     return (
//         <Container >
//           <Row>
//           {props.manyBooks.map((oneBook)=>{
//             return(
//              <SingleBook book={oneBook}/>
              
//     )
//     })}
//     </Row>
//     </Container >
//       );
// }

// export default BookList;

class BookList extends Component {


state = {
searchValue:"",
selectedAsin: null //perchè non hai selezionato ancora nessun libro
}

changeAsin = (newAsin) => {//passo questo metodo come props a SingleBook
  this.setState({
    selectedAsin:newAsin,
  })
}

render(){
return(
  <Container >
    <Row md={2} className="justify-content-center my-4" >
    <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Cerca un libro" value={this.state.searchValue} onChange={e=>{this.setState({searchValue: e.target.value})}}/>
      </Form.Group>
      </Row>
      <Row>
        <Col md={8}>
        <Row>
          {this.props.manyBooks
          .filter((oneBook)=>oneBook.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
          .map((oneBook)=>{
            return(
             <SingleBook book={oneBook} key={oneBook.asin} changeAsin={this.changeAsin} selectedAsin={this.state.selectedAsin}/>//changeAsin bisogna invocarla dentro singleBook
                )
            })}
            </Row>
        </Col>
        <Col md={4}>
        <CommentArea bookId={this.state.selectedAsin}/>
        </Col>
    </Row>
  </Container >
   );

}
}

export default BookList;