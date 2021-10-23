import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link, useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';
let history=useHistory

export const Header = () => {
    function Logout(){
        window.sessionStorage.clear()
        history.push("/login")
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Navbar</Navbar.Brand>
              <Nav className="me-auto">
                 <Nav.Link as={Link} to="/">Home</Nav.Link>
                 <Nav.Link as={Link} to="/registrationpage">Sign UP</Nav.Link>
                 <Nav.Link as={Link} to="/formikcomponent">Formik</Nav.Link>
                 <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                 <Nav.Link as={Link} to="/productcatagorypage">Product Catagory</Nav.Link>
                 <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                 <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
                 <Button variant="warning" onClick={Logout}>LogOut</Button>{' '}
              </Nav>
            </Container>
            </Navbar>  
        </div>
    )
}