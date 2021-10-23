import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';



export const Header = () => {
    return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>City Tour</Navbar.Brand>
            
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
                <Nav.Link as={Link} to="/tour">Tours</Nav.Link>
                <Nav.Link as={Link} to="/registration">Sign UP</Nav.Link>
                <Nav.Link as={Link} to="/login">Log In</Nav.Link>
              </Nav>
            </Container>
            </Navbar>  
        </div>
    )
}
