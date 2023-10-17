import { LOGO_URL } from "../utils/constants";
//import {CART_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Header =()=>{

  //let btnName ="Login";
  let [btnNameReact,setbtnNameReact] = useState("Login")
  const onlineStatus=useOnlineStatus();
  const {loggedInUser} =useContext(UserContext);
  //console.log(loggedInUser);
  //subscribing  to store using selector//
  const cartItems =useSelector((store)=>store.cart.items);

    return(

<div className="flex justify-between  bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
<div className="logo-container">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
  <ul className="flex p-4 m-4">
  <li className="px-4">Online Status:{onlineStatus?"🟢":"🔴"}
</li>
    <li className="px-4"><Link to="/">Home</Link></li>
    <li className="px-4"><Link to="/about">About Us</Link></li>
    <li className="px-4"><Link to="/contact">Contact</Link></li>
    <li className="px-4"><Link to="Glocery">InstaMart</Link></li>
    <li className="px-4 font-bold text-lg">
    <Link to="cart">🛒({cartItems.length}items)</Link></li>
    <button className="login" onClick={()=>{

    btnNameReact =="Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
    
    }}>{btnNameReact}</button>
    <li className="px-4 font-bold">{loggedInUser}</li>
  </ul>
      </div>
  
      </div>
    
    )
}
  export default Header;