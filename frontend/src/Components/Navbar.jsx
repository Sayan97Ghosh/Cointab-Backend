import React from 'react'
import { isLoggedIn } from '../Auth/Auth'
import "./Navbar.css";

function Navbar() {
    const status = isLoggedIn();

    // post data through authentication

    
   
  return (
    <div className='navbar'>
        <img className='logo' src=""/>

        <div className='items'>
        <p><a href="/private/home">
            Home
                </a>
                </p>
            <a href="/login"><button className='login_button'>Log in </button></a>
            <a href="/">
            <button className='login_button'>Sign Up</button>

            </a>
        </div>
    </div>
  )
}

export default Navbar