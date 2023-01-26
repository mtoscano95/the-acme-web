//creating a server using HTTP

const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('<h1>Hello World</h1>');
    res.end();
})

const port = process.env.PORT || 3000;

server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

/*
const express = require('express');


onsole.log('hello world!')

*/