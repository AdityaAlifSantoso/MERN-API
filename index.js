const express = require ('express');

const app = express();

app.use (() =>{
    console.log('Server Running on Port: 5000')
})

app.listen(5000);