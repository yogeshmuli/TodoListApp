const express = require('express')
const bodyParser= require('body-parser')
const port=3005;
var cors = require('cors');
const app =express()
app.use(cors());


const api=require("./routes/api")

app.use(bodyParser.json())
app.use("/api",api)
app.get('/hello',function(req,res){
    res.send("hello from server")
})

app.listen(port,function(){
    console.log("port listening")
    
})