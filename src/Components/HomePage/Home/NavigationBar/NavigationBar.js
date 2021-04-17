import React from 'react';
import {Row,Col,Navbar,Nav,Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Container>
              <Row>
                <Col>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand href="/home">Prism Photography</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav >
                                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                                <Nav.Link href="/">Contact</Nav.Link>

                                <Link to="/login">
                                    <Button variant="warning">Login</Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default NavigationBar;