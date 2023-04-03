import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Privateroute from '../Components/Privateroute';
import Homepage from '../Pages/Homepage';


function Allroutes() {
  return (
    <Routes>

    <Route path="/" element={<Signup/>} />
    <Route path="/login" element={<Login />} />

    <Route path="/private" element={<Privateroute/>}>
    <Route path="home" element={<Homepage/>} />
    </Route>

    <Route path="*" element={<h1>404 | Not Found</h1>} />
    </Routes>
  )
}

export default Allroutes