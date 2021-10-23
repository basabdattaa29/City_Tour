import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Navbar</Navbar.Brand>
              <Nav className="me-auto">
                 <Nav.Link as={Link} to="/useref">UseRef</Nav.Link>
                 <Nav.Link as={Link} to="/home">Home</Nav.Link>
                 <Nav.Link as={Link} to="/reducerexample">Reduce</Nav.Link>
              </Nav>
            </Container>
            </Navbar>  
        </div>
    )
}
