const express = require('express');
const cors = require('cors');
const userroute = require('./userroute');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/', userroute);


app.use('/',function(req,res){
    console.log("This is Backend");
})

app.listen(4000,(err)=>{
    if(err) console.log(err);
    else
    console.log("Server connected to port 4000");
})