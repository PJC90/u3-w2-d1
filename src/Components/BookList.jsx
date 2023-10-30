import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form, Col } from "react-bootstrap";


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
searchValue:""
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
        <Col>
          {this.props.manyBooks
          .filter((oneBook)=>oneBook.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
          .map((oneBook)=>{
            return(
             <SingleBook book={oneBook} key={oneBook.asin}/>
                )
            })}
        </Col>
    </Row>
  </Container >
   );

}
}

export default BookList;