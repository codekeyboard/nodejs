
const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from home page");
});

app.get('/about', (req, res) =>{
    return res.send("Hello from about page");
});


const myserver = http.createServer(app);

myserver.listen(8000,() => console.log("Srver Started!"));


 