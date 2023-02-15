import React, { Component } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
function Register(){
    const navigate = useNavigate();
    const [orgname,setorgname] = useState("");
    const [orgemail,setorgemail] = useState("");
    const [phno,setphno] = useState("");
    const [password,setpassword] = useState("");
    const [repassword,setrepassword] = useState("");
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is mendatory')
          .min(3, 'Password must be at 3 char long'),
        repassword: Yup.string()
          .required('Password is mendatory')
          .oneOf([Yup.ref('password')], 'Passwords does not match'),
      })
      const formOptions = { resolver: yupResolver(formSchema) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState
      
    const onSubmit = (event) => {
        event.preventDefault();
        var orguser = {
            orgname: orgname,
            orgemail: orgemail,
            phno: phno,
            password: password
        }
        axios.post('http://127.0.0.1:4000/register', orguser)
          .then((res) => {
            alert(res.data);
            console.log(res.data);
            // navigate('/login')
          }, (err) => {
            console.log(err);
          });
      }
        return (
            <>
            <Container style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '10vh',
                }}>
                <h1> REGISTER PAGE</h1>
                <br></br>
                </Container>
            <Container style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80vh',
                    width: '80vh',
                    border: '2px solid black'
                }}>
                    <br></br>
                <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="exampleInputName1">Organization Name</label>
                    <input type="text" class="form-control" id="exampleInputName1" placeholder="Organization Name" onChange={(e)=>setorgname(e.target.value)}/>
                </div>
                <div class="form-group">
                    
                    <label for="exampleInputEmail1">Organization Email address</label>
                    <input type="email" class="form-control" id = "exampleInputEmail1" placeholder="Enter email" onChange={(e)=>setorgemail(e.target.value)}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group">
                    
                    <label for="exampleInputNumber1">Phone Number</label>
                    <input type="Number" class="form-control" id = "exampleInputNumber1" placeholder="Enter Phone Number" onChange={(e)=>setphno(e.target.value)}/>
                    <small id="phoneHelp" class="form-text text-muted">We'll never share your number with anyone else.</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <br></br>

                <div class="form-group">
                    <label for="exampleInputPassword2">Re-Enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Re-enter Password" onChange={(e)=>setrepassword(e.target.value)}/>
                </div>
                <br></br>
                <input type="submit" className="btn btn-primary"/> <br></br>
                <Link to="/login"><a>Registered? Log in</a></Link>
                </form>
            </Container>
            </>
        );
}

export default Register;