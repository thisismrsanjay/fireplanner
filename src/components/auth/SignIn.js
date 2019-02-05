import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signIn } from "../../store/actions/authAction";
import { connect } from "react-redux";



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
    this.props.signIn(this.state);
  };

  render() {
    const { email, password } = this.state;
    const {authError} =this.props;
   
    
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
          {authError ? (
            <div className="alert  alert-danger m-3">{authError}</div>
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

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    user:state.auth.firebase
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
