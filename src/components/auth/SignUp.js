import React from "react";
import { Link } from "react-router-dom";



class Register extends React.Component {
  state = {
    firstName: "",
    lastName:"",
    email: "",
    password: "",
    error: false,
    message:"",
    
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    
    
  };

  
  render() {
    const { firstName,lastName, email, password } = this.state;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="alert  alert-light  border-primary "
          style={{ maxWidth: 450, margin: "10% auto  auto" }}
        >
          <h1
            className="text-primary text-center"
            style={{ fontSize: "100px", marginTop: "-50px" }}
            >
            <span role="img" aria-label="">👨‍💻</span>
          </h1>
          
          <h1 className="text-primary text-center">Register</h1>
          <div className="form-group ">
            <input
              type="text"
              name="firstName"
              value={firstName}
              required
              className="form-control "
              id="firstName"
              placeholder="&#128113; john"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group ">
            <input
              type="text"
              name="lastName"
              value={lastName}
              required
              className="form-control "
              id="lastName"
              placeholder="👨 doe"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              required
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="&#128231; john@gmail"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              minLength="6"
              required
              className="form-control"
              id="exampleInputPassword1"
              placeholder="&#128274; *******"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mb-4">
            Submit
          </button>
        </form>
        <div style={{ maxWidth: 450, margin: "auto" }}>
          {(this.state.error)?<div className="alert alert-dismissible alert-danger m-3">
            {this.state.message}
          </div>:''}
          <h4 className="text-muted text-center m-3">
            already had an account?
          </h4>
          <Link to="/signin" className="btn btn-primary btn-block">
            {" "}
            Login
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;