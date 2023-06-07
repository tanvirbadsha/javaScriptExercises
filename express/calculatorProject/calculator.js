// import express from 'express';
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// url boshai enter dile ei get handle korbe.
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req,res) => {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send(`Your answer is: ${result}`);
})

app.listen(3000, ()=> console.log("App is listenting at port 3000"))