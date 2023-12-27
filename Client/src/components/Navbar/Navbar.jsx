import React from 'react'
import "./navbar.css"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const { user } = useContext(AuthContext);

   
        const { dispatch } = useContext(AuthContext);
      
        const handleLogout = () => {
          // Dispatch the LOGOUT action
          dispatch({ type: "LOGOUT" });
        };
      
    
  

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo"> MR Booking</span>
                </Link>
                <div className="navItems">
                    {user ? (
                        <>  <span className="username">Hello {user?.username}</span>
                            <button className="navButton" onClick={handleLogout}>Log Out</button></>
                    ) : (
                        <>
                            <button className="navButton">Register</button>
                           <Link to={"/login"}  style={{ textDecoration: "none" }}>

                           <button className="navButton">Login</button>
                           </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


export default Navbar;