import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
  
    const [formData, setFormData] = useState({ email: "", password: "" });

 
   





  const handleChange = (e) => {
  
   setFormData({ ...formData, [e.target.type]: e.target.value })   

  }

  const handleSubmit = () =>{
    axios
    .post("http://localhost:8080/signup", formData)
    .then(({ data }) => {
      console.log(data.token);
      sessionStorage.setItem("data", JSON.stringify(data));
      toast({
        title: data.message,
        description: "You are Successfully Logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    
      window.reload();
    })
    .catch((err) => {
      toast({
        title: "Invaild Email or Password",
        description: "Please check your Email and Password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
     
      window.location.reload();
    });
    navigate("/private/home")
  setFormData({ email: "", password: "" });
  }
console.log(formData)
  return (
    <div className="container">
      <h1 className="title">Sign In</h1>
      <p className="subtitle">
        Please <span className="extra-text">log in</span>  using your username and password!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="email"
            placeholder="Email"
            name = "email"
            value={formData.email}
            onChange={handleChange}
          />
         
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
       
        </div>
        <hr className ='divider'></hr>
        <input type="submit" value="Log In" className="login_button" />
      </form>
      <div className="link_container">
        <a href="#" className="small">
          Forgot Password?
        </a>
      </div>
     <ToastContainer/>
    </div>
  );
};

export default Login;