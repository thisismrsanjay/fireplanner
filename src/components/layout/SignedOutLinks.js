import React from "react";
import { Link } from "react-router-dom";

export default function SignedOutLinks() {
  return (
         <ul className="navbar-nav ml-auto ">
     
      
       
        <Link className="nav-link" to="/signup">
          SignUp
        </Link>
      
      
        <Link className="nav-link" to="/signin">
          LogIn
        </Link>
     
  
      

    </ul>
     
      
    
  );
}
