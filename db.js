const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// db
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(`DB Connection Error: ${err.meessage}`))

mongoose.connection.on('error',err =>{
    console.log(`DB Connection Error: ${err.meessage}`);
})

app.listen(process.env.PORT || 2000)