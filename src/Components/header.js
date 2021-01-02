import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'


export default function header() {
    const title = 'Mahavir International School';
    return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/academics">Academics</Nav.Link>
            
            </Nav>
            <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            
            <Nav.Link href="/login">
                Login | SignUp
            </Nav.Link>


            </Nav>
        </Navbar.Collapse>
        </Navbar>



    )
}
