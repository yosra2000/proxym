import React , { Component } from 'react';
import axios from 'axios';

//Get request 
axios
.get('https://jsonplaceholder.typicode.com/posts')
.then (res => console.log(res.data))
.catch (err => console.error(err));

//Post request
axios.post('https://jsonplaceholder.typicode.com/posts',{
 
title :'hi',
body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
userId :1 })
.then( res=> console.log(res))
.catch (err=> console.error(err));

//put o patch request
axios  
.patch ('https://jsonplaceholder.typicode.com/todos/1',
{
    title : 'updated todo',
    completed: 'true'
})
.then (res => console.log (res))
.catch (err => console.error(err));

//delete request
axios.delete('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res))
.catch(err => console.error(err));






