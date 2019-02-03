import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';


export default function  () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
   <Link to="/" className="navbar-brand">FirePlanner</Link>
  
    
    <SignedOutLinks/>
    <SignedInLinks/>

</nav>
  )
}
