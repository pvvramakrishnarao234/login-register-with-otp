const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

mongoose.connect('mongodb://127.0.0.1:27017/pschool',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('DB CONNECTED!!!');
    }
})

const orguserschema = new mongoose.Schema({
    orgname: String,
    orgemail: String,
    password: String,
    phno: Number
})

const Orgusermodel = mongoose.model('users',orguserschema);


router.post('/register',async function(req,res){
    var neworguser = new Orgusermodel({orgname: req.body.orgname, orgemail: req.body.orgemail, password: req.body.password, phno: req.body.phno})
    await Orgusermodel.findOne({orgemail: req.body.orgemail}).then(user=>{
        if(user){
            res.send("User email already exists");
        }else{
            neworguser.save();
            res.send("User successfully registered!")
        }
    });
})


router.post('/login',async function(req,res){
    await Orgusermodel.findOne({orgname:req.body.orgname,orgemail: req.body.orgemail}).then(user=>{
        if(user){
            // console.log(user.phno);
            res.send(String(user.phno));
        }
        else{
            res.send("No User found");
        }
    })
})

module.exports=router;