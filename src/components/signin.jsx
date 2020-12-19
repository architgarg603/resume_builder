import React, { Component } from "react";

import "./signin.css";
import { connect } from "react-redux";
// import {auth, provider} from "../firebase/fbconfig";
import { login } from "../actions/authActions";
import { Link } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let value = e.target.value;

    this.setState({
      ...this.state,
      [id]: value,
    });
  };

  onSubmit = (e) => {
    this.props.login(this.state);
  };



  render() {

    return (
      <div className="signIn-pg">
        <div className="signin-form">
          <div className="signin-heading">
            <h1>Sign In</h1>
          </div>
          <div className="signin-form-details">
            <div className="input-group full">
              <label htmlFor="email">Email</label>
              <input type="text" id="email"  value={this.state.email}
                onChange={(e) => {
                  this.onChangeHandler(e);
                }}
                placeholder="Enter your email"
              />
            </div>
            <div className="input-group full">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password" placeholder="Enter your password"
                value={this.state.password}
                onChange={(e) => {
                  this.onChangeHandler(e);
                }}
              />
            </div>
            <div className="input-group full">
              <button className="btn" onClick={this.onSubmit}>
                Sign In
            </button>
            </div>
            <div className="R-btn" id="Register">
              <span>If you haven't already registered, Please Sign Up!</span>
              <button className="Sign_btn" onClick><Link to="/register">Sign Up</Link></button>
            </div>

            <div className="input-group full">
              {this.props.message && <span>{this.props.message}</span>}
            </div>
          </div>
        </div>
        <img src="/images/auth.svg" alt="" className="signIn-img" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    message: state.auth.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userDetails) => {
      dispatch(login(userDetails));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
