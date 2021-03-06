import React from 'react'
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import img from './logo.jpg';



const Banner = () => {
  return (
    <div >
        <Container fluid="md">
          <Row>
            <Col className='Col-1'>
            <h1 className='Heading1'>Jump start your crypto portfolio</h1>
            <h3 className='Heading2'>Coin Cap is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</h3>
        
          <Form.Control  className='input-1'
            aria-label="Example text with button addon"
            placeholder="Enter Your Email"
            
            autoComplete="off" autoCorrect="off" autoCapitalize="off"
        /> 
          <Button as="input" type="submit" value="Get Started" className='submit-btn' />
          </Col>
        
        <Col>
        <img src={img} className='img-1' alt=""/>
        </Col>
        
      </Row>
      
      </Container>
    </div>
  );
    
  
}

export default Banner