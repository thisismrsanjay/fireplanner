import React, { Component } from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import {setUser} from '../../store/actions/authAction';

export class Navbar extends Component {

  componentDidMount(){
    this.props.setUser();
  }

  render() {
    const links = this.props.auth ? <SignedInLinks /> : <SignedOutLinks />;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
        <Link to="/" className="navbar-brand">
          FirePlanner
        </Link>

        {links}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    auth: state.auth.firebase
  };
};

const mapDispatchToProps =dispatch=>{
  return {
    setUser : ()=>dispatch(setUser()) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
