const express = require('express');
const app = express();

// bring routes

// const postRoutes = require('./routes/post')
const {getPosts} = require('./routes/post') // obj destructure

// app.get("/",postRoutes.getPosts);
app.get("/",getPosts);// obj destructure

// app.listen(2000)

const port= 2000
app.listen(port , ()=>{
    console.log(`Listening to node api ${port}`)
})