import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logout } = useAuth();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        <Nav>
                            {user?.displayName ?
                                <>
                                    <Button variant="danger" onClick={logout}>Logout</Button>
                                    <Navbar.Text>
                                        Hello, <span className='text-warning'>{user?.displayName}</span>
                                    </Navbar.Text>
                                </>
                                :
                                <>
                                    <Nav.Link href="/login">
                                        <Button variant="primary">Login</Button>
                                    </Nav.Link>
                                    <Nav.Link href="/register">
                                        <Button variant="outline-primary">Register</Button>
                                    </Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;