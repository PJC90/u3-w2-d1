import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap'

const MyFooter = () => {
  

  return (
    
      <Container fluid className='bg-dark text-white py-5'>
        <Container >
       <Row className='text-center'>
        <Col><strong>EPICODE</strong> - Copyright {new Date().getFullYear()}</Col>
        
       </Row>
       </Container>
      </Container>
    
  )
}

export default MyFooter
