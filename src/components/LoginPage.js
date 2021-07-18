import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { Component } from 'react';
import './LoginPage.css'

const LoginPage = () => {
    return (
        
            <Container>
                 <h1 className="shadow-sm text-success mt-3 p-3 text-center rounded"> <center>Admin Login</center></h1>
                <Row className="mt-4"> <center>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                    </center>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary "> <center>Copyright © 2021 Masud Rana. All Rights Reserved.</center></h6>
            </Container>
        
    );
};

export default LoginPage;