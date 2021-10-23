import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const Header = () => {
  const idname="B001";
  const name="Harry";
    return (
        <div>
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
           <Nav className="me-auto">
            <Nav.Link as={Link} to={`/homepage/${idname}`}>Home</Nav.Link>
             <Nav.Link as={Link} to="/aboutpage">About</Nav.Link>
              <Nav.Link as={Link} to="/contactpage">Contact</Nav.Link>
              <Nav.Link as={Link} to={`/feedbackpage/${name}`}>Feedback</Nav.Link>
          

        </Nav>
    </Container>
  </Navbar>  
        </div>
    )
}
