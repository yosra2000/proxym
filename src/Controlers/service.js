import React , { Component } from 'react';
const axios = require('axios');

/*
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

/*

/* create a GET http call via axios by pass server url and pass params as options.
*@param url
 @param params
*/

const get=(url,params ) => {return  axios.get(url ,{params })};

const post = (url,body)=> {
    console.log('post working')
    return axios.post(url,{body})
  }

const put=( url,id, body)=> {

    console.log(' patch working')
    return axios.put(url,id, {body})

}

const suprimer=( url,id)=> {

    console.log(' patch working')
    return axios.delete(url,id, )

}


const customHttpClient = {
   get,
   post,
   put,
   suprimer


}






/**
 * create a GET http call via axios by pass server url and pass params as options.
 *
 * @param url
 * @param params
 */
const get  = (url,params ) => {return  axios.get(url ,{params })};

const customHttpClient = {
    get
}

export default customHttpClient;





