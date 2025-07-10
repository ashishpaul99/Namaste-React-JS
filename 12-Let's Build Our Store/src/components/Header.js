import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";
import {useSelector} from "react-redux"




const Header=()=>{
   
    // updating login/logout variable
    const [btnName,setBtnName]=useState("Login");
    
    // online status 
    const onlineStatus=useOnlineStatus();

    // const data=useContext(userContext);
    // console.log(data.loggedInUser);

    // alter
    const {loggedInUser}=useContext(userContext);
    // console.log(loggedInUser);

    // Subscribing to the store --> accessing items in the store
    const cartItems=useSelector((store=>store.cart.items))
    console.log(cartItems);

    return (
    <div className="flex justify-between shadow-lg bg-pink-50  sm:bg-yellow-50 lg:bg-green-100">
        <div className="logo-container">
           <Link to="/"> <img className="w-20 m-2 rounded-md" src={LOGO_URL}/></Link>
        </div>
        <div className="flex items-center">
            <ul className="flex p-5 m-2">
                <li className="px-4">Online Status :{onlineStatus? "🟢" : "🔴"}</li>
                <li className="px-4">
                    <a href="/">Home</a>
                </li>
                <li className="px-4">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-4">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 font-bold">
                    <Link to="/cart">🛒 [{cartItems.length} items]</Link></li>
                <li>
                <button className="login" onClick={()=>{
                   btnName==="Login"?setBtnName("Logout"):setBtnName("Login");  
                }}>{btnName}</button></li>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    );
}

export default Header;


