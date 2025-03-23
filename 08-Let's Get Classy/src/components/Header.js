import { use, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"

const Header=()=>{
   
    // updating login/logout variable
    const [btnName,setBtnName]=useState("Login");

    // console.log("Body rendered");
    // useEffect(()=>{
    //     console.log("useEffect is called");
    // })

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>Cart</li>
                <button className="login" onClick={()=>{
                   btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                   
                }}>{btnName}</button>
            </ul>

        </div>

    </div>
    );
}

export default Header;