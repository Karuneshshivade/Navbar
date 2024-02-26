import React from "react";
import './navbar.css'
import { Outlet,Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link className="link" to="/"><p>Home</p></Link>
                </li>
                <li>
                    <Link className="link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="link" to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className="link" to="/address">Address</Link>
                </li>
                <li>
                    <Link className="link" to="/information">Information</Link>
                </li>
                <li>
                    <Link className="link" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
        
    )
}
export default Navbar;