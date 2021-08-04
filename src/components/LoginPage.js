import React , { useEffect } from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { Component } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

import customHttpClient from '../Controlers/service';

//get
const entries =  customHttpClient.get("https://jsonplaceholder.typicode.com/posts").then(result => console.log('call free api ',result))

useEffect(()=> {
    console.log('done !!!!!')
},entries)


//post
customHttpClient.post('https://jsonplaceholder.typicode.com/posts',{
 
title :'hi',
body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
userId :1 })
.then( res=> console.log(res))
.catch (err=> console.error(err));

//put 
customHttpClient.put('https://jsonplaceholder.typicode.com/todos/1',
{
    title : 'updated todo',
    completed: 'true'
})
.then (res => console.log (res))
.catch (err => console.error(err));

//delete
customHttpClient.delete('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res))
.catch(err => console.error(err));






const LoginPage = () => {
    return (
        
            <Container>
                 <h1 className="shadow-sm text-success mt-3 p-3 text-center rounded"> <center>Admin Login</center></h1>
                <Row className="mt-4"> <center>
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address : </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password : </Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                          
                            <button>
                            <Link to='/Inputs'>
                                 Login
                            </Link> </button> 
                            
                            
                        </Form>
                    </Col>
                    </center>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary "> <center>Copyright © 2021 Masud Rana. All Rights Reserved.</center></h6>
            </Container>
        
    );
};

export default LoginPage;