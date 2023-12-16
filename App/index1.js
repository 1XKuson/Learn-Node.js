const port = 3000;
const http = require('http');
const fs = require('fs');
const express = require('express');

const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`, 'utf8');
const productPage1 = fs.readFileSync(`${__dirname}/templates/product1.html`, 'utf8');
const productPage2 = fs.readFileSync(`${__dirname}/templates/product2.html`, 'utf8');
const productPage3 = fs.readFileSync(`${__dirname}/templates/product3.html`, 'utf8');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if (pathName === '/index.html' || pathName === '/home') {
        res.write(indexPage)
        res.end();
    } else if (pathName === '/product1.html') {
        res.write(productPage1)
        res.end();
    } else if (pathName === '/product2.html') {
        res.write(productPage2)
        res.end();
    } else if (pathName === '/product3.html') {
        res.write(productPage3)
        res.end();
    } 
    else {
        res.writeHead(404);
        res.end("<h>404 Not Found</h>");
    }
});

server.listen(port, () => {
    console.log("Server started on port", port);
});
