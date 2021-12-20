import React from 'react';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import {
    Nav,
    Navbar,
    Container,
} from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar
            bg="dark"
            sticky="top"
            variant="dark"
            expand="lg"
        >
        <Container>
            <Navbar.Brand href="/">Unstable Unicorns</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/lobbies#lobbies">Lobbies</Nav.Link>
                    <Nav.Link href="/rules#rules">Rules</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;
