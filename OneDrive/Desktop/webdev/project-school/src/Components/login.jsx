import React, { Component } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import auth from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Login(){
    const navigate = useNavigate();
    const [orgname,setorgname] = useState("");
    const [orgemail,setorgemail] = useState("");
    const [password,setpassword] = useState("");
    const [final, setfinal] = useState("");
      async function onCheckup(phno){
         
        // console.log("captcha verification over");
        if (!window.recaptchaVerifier)
        window.recaptchaVerifier = new RecaptchaVerifier(
            "login-container",
            {
                size: "invisible",
                callback: (response) => {
                    // setloading(true);
              },
              "expired-callback": () => {},
            },
            auth
          );
        const appVerifier = window.recaptchaVerifier;
    
        const formatPh = "+91" + phno;
        console.log(auth+" "+formatPh+" "+appVerifier);
        await signInWithPhoneNumber(auth, formatPh, appVerifier)
          .then((confirmationResult) => {
            setfinal(confirmationResult);
            console.log("OTP sent successfully");
          })
          .catch((error) => {
            console.log("OTP Not sent");
            console.log(error);
          });

          var otp = String(prompt("Enter the otp"));
        console.log(otp);
        final
          .confirm(otp)
          .then(async (res) => {
            console.log(res);
            alert("OPT Verification Successful");
          })
          .catch((err) => {
            console.log(err);
            
          });
      }
      // function onCheckOTP() {
        
      // }
    const handleSubmit = (event) => {
        event.preventDefault();
        var orguser = {
            orgname: orgname,
            orgemail: orgemail,
            password: password
        }
        axios.post('http://127.0.0.1:4000/login', orguser)
          .then((res) => {
            if(res.data!="No User found"){
                alert("User Found");
                onCheckup(res.data);
                setTimeout(() => {
                  
                }, 6000);
                // onCheckOTP();
            }
            else{
                alert("User not found");
            }
          }, (err) => {
              navigate('/register');
              console.log(err);
          });
      }
        return (
            <>
            <Container style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '33vh',
                    // border: '2px solid black'
                }}>
                <h1> LOGIN PAGE</h1>
                </Container>
            <Container style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '60vh',
                    width: '75vh',
                    border: '2px solid black'
                }}>
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputName1">Organization Name</label>
                    <input type="text" class="form-control" id="exampleInputName1" placeholder="Organization Name" onChange={(e)=>setorgname(e.target.value)}/>
                </div>
                <br></br>
                <div class="form-group">
                    
                    <label for="exampleInputEmail1">Organization Email address</label>
                    <input type="email" class="form-control" id = "exampleInputEmail1" placeholder="Enter email" onChange={(e)=>setorgemail(e.target.value)}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br></br>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <br></br>
                <input type="submit" className="btn btn-primary"/><br></br>
                <Link to="/register"><a>New User? Register here!</a></Link>
                </form>
            </Container>
            <div id ="login-container"></div>
            </>
        );
}

export default Login;