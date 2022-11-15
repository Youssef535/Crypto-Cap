import React from 'react'
import { Button,Container,Row } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom';
// If You want import an img

function NotFound() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }
  return (
    <Container>
      <Row>
      <div className='pt-5'>
      <h1 className='display-3 pt-5'>Page Not Found</h1>
      <p className='fs-5 pt-4 '>Looks like you've followed a broken link or entered URL that doesn't exist on this site.</p>
          <Button onClick={routeChange}>Back to our site</Button>
    </div>
      </Row>
    </Container>
  )
}

export default NotFound