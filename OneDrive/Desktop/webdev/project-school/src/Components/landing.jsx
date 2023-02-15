import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import {Row,Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Fraud Detection System</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
                <Container style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '33vh',
                    // border: '2px solid black'
                }}>

                </Container>
                <h1> Welcome </h1>
                <Container style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '33vh',
                    width:'75vh',
                    border: '2px solid black'
                }}>
                    <Row>
                        <Col>
                        <Link to="/login"><Button>
                                Login
                            </Button></Link>
                            
                        </Col>
                        <Col>
                        <Link to="/register"><Button>
                                Register
                            </Button></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Landing;