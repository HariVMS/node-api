const express = require('express')
const app  = express();
const dotenv = require('dotenv')
const path  = require('path')
const bodyParser = require("body-parser");
dotenv.config({path: path.join(__dirname,'config',"config.env")})

app.listen(process.env.PORT,()=>{
    console.log(`server is on ${process.env.PORT}`)
})
app.use(bodyParser.json());


const products= require("./routers/product");
app.use("/p/",products)