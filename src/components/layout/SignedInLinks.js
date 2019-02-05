import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authAction';

//in functional components we can't uses this.props instead pass props as argument
//props.signOut() will call itself
const  SignedInLinks=(props)=> {

  return (
         <ul className="navbar-nav  ml-auto">
     
      
       
        <Link className="nav-link" to="/create">
          NewProject
        </Link>
      
      
        <li className="nav-link" onClick={props.signOut}> 
          SignOut   
        </li>
          
     
      <li className=" " href="#0">
        <button className="btn btn-info" style={{borderRadius:"50%"}}>NN</button>
      </li>
      

    </ul>
     
      
    
  );
}
const mapDispatchToProps =(dispatch)=>{
  return {
    signOut:()=>dispatch(signOut())
  }
}


export default connect(null,mapDispatchToProps)(SignedInLinks);