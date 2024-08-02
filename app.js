const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello world from node.js");
});

// app.listen(2000)

const port= 2000
app.listen(port , ()=>{
    console.log(`Listening to node api ${port}`)
})