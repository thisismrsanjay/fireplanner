import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignIn extends Component {

  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const {  email, password } = this.state;
    return (
      <div className="">
        <form
          onSubmit={this.handleSubmit}
          className="alert   alert-light border-secondary "
          style={{ maxWidth: 450, margin: "10% auto  auto" }}
        >
          <h1
            className="text-secondary text-center"
            style={{ fontSize: "100px", marginTop: "-50px" }}
          >
            <span role="img" aria-label="">
              🔮
            </span>
          </h1>

          <h1 className="text-secondary text-center">Login</h1>

          <div className="form-group">
            <input
              type="email"
              name="email"
              required
              value={email}
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
          <button type="submit" className="btn btn-success  btn-block mb-4">
            Submit
          </button>
        </form>
        <div style={{ maxWidth: 450, margin: "auto" }}>
          {this.state.error ? (
            <div className="alert  alert-danger m-3">{this.state.message}</div>
          ) : (
            ""
          )}
          <h4 className="text-muted text-center m-3">New Here?</h4>
          <Link to="/signup" className="btn btn-success  btn-block">
            {" "}
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
