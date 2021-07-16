import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './Login.css';

const Login = ()=>
{
return (
    <Container>
    <h1> <center>Welcome To Our  Web Site </center></h1>
    
    <Row className="mt-5">  <center>
        <Col lg={12} lg={8} lg={4} className="p-6 m-auto shadow-lg rounded-lg">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success btn-block" type="submit">
                    Login
                </Button>
            </Form>
        </Col></center>
     

    </Row>
   
<br/> <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

</Container>

);}
export default Login