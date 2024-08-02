const express = require('express');
const morgan =require("morgan");
const app = express();

const {getPosts} = require('./routes/post') 

// own middleware

const myOwnMiddleWare = (req,res,next) => {
    console.log('middleWare applied!!!');
    next();
}

// middleware
app.use(morgan("dev"));
app.use(myOwnMiddleWare);

app.get("/",getPosts)

const port= 2000
app.listen(port , ()=>{
    console.log(`Listening to node api ${port}`)
})