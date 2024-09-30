import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Benomads externals</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                    <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Data" id="data-dropdown">
                    <NavDropdown.Item href="#data1">Data Item 1</NavDropdown.Item>
                    <NavDropdown.Item href="#data2">Data Item 2</NavDropdown.Item>
                    <NavDropdown.Item href="#data3">Data Item 3</NavDropdown.Item>
                    <NavDropdown.Item href="#data4">Data Item 4</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavBar;