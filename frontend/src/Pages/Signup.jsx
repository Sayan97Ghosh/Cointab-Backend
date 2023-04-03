import React, { useState } from "react";
import "./LoginForm.css";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

   
  
   
  
    // handlesubmit function bellow
  
    const handleChange = (e) => {
   
     setFormData({ ...formData, [e.target.type]: e.target.value })   
  
    }
  
    const handleSubmit = () =>{
      axios
      .post("http://localhost:8080/login", formData)
      .then(({ data }) => {
        console.log(data.token);
        localStorage.setItem("data", JSON.stringify(data));
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
      navigate("/login")
    setFormData({ email: "", password: "" });
    }


  //  useNavigate hook


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(username && password){
//         localStorage.setItem("data",JSON.stringify(obj));
//         toast('🦄 Signup Successful!', {
//           position: "top-center",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           });

//           setTimeout(()=>{

//             
//           },1300)
          
//     }
//     else{
//        alert("Please Enter all the details")
//     }
  
//   }

console.log(formData)

  return (
    <div className="container">
      <h1 className="title">Sign In</h1>
      <p className="subtitle">
        Please <span className="extra-text">Sign up</span> using your username and password ✨!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="email"
            placeholder="@jon.com example"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
         
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          
         {/* checkbox here */}
        </div>
        <hr className="divider"></hr>
        <input type="submit" value="Sign Up" className="login_button" />
      </form>
      <div className="link_container">
        <a href="#" alt="this is value" className="small">
          Forgot Password?
        </a>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signup;