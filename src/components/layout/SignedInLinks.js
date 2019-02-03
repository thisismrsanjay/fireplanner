import React from "react";
import { Link } from "react-router-dom";

export default function SignedInLinks() {
  return (
         <ul className="navbar-nav  ">
     
      
       
        <Link className="nav-link" to="/create">
          NewProject
        </Link>
      
      
        <Link className="nav-link" to="/">
          Sign Out
        </Link>
     
      <li className=" " href="#0">
        <button className="btn btn-info" style={{borderRadius:"50%"}}>NN</button>
      </li>
      

    </ul>
     
      
    
  );
}
