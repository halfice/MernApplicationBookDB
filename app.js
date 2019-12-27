const express = require('express');
const connectDB=require('./configs/db');
const app =express();

connectDB();

app.get('/',(req,res)=>{
    res.send('BIS MILLAH HRI REHMAN NIR RAHEEM');

});

const port=9002;
app.listen(port,()=>console.log("server is running"));