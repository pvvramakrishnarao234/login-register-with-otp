"use strict";

var express = require('express');

var mongoose = require("mongoose");

var router = express.Router();
mongoose.connect('mongodb://127.0.0.1:27017/pschool', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('DB CONNECTED!!!');
  }
});
var orguserschema = new mongoose.Schema({
  orgname: String,
  orgemail: String,
  password: String,
  phno: Number
});
var Orgusermodel = mongoose.model('users', orguserschema);
router.post('/register', function _callee(req, res) {
  var neworguser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          neworguser = new Orgusermodel({
            orgname: req.body.orgname,
            orgemail: req.body.orgemail,
            password: req.body.password,
            phno: req.body.phno
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(Orgusermodel.findOne({
            orgemail: req.body.orgemail
          }).then(function (user) {
            if (user) {
              res.send("User email already exists");
            } else {
              neworguser.save();
              res.send("User successfully registered!");
            }
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/login', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Orgusermodel.findOne({
            orgname: req.body.orgname,
            orgemail: req.body.orgemail
          }).then(function (user) {
            if (user) {
              // console.log(user.phno);
              res.send(String(user.phno));
            } else {
              res.send("No User found");
            }
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;