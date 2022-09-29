import {React} from 'react'
import {Container, Navbar, Nav, Button, Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import img from '../assets/images/logo.jpg'
import { CryptoState } from '../Context';




const Navigationbar = () => {
  const {currency, setCurrency } = CryptoState();
  
  return (
      <div>
        
        <>
          <Navbar  className='navBar' bg="dark" variant="dark" expand="sm"  >
            <Container>
              <Navbar.Brand className='Brand' as={Link} to="/">
              <img
                  alt=""
                  src={img}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
            />
            Coin Cap
              </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/News">News</Nav.Link>
                    <Nav.Link as={Link} to="/NFT">NFT</Nav.Link>
                    <Nav.Link as={Link} to="/Exchange">Exchange</Nav.Link>
                </Nav>
                
                <Nav > 
                  <Button className='btn' >Login</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Form.Select aria-label="Default select example" className='Select'
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    </Form.Select>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
        
      </div>
    
  );
}



export default Navigationbar;