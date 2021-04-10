import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createMessage } from "../../actions/messages";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    const newUser = {
      username,
      email,
      password,
    };
    if (password !== password2) {
      this.props.createMessage({ missMatch: "Passwords do not match!" });
    } else {
      this.props.register(newUser);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container col-md-4 m-auto">
        <div className="card card-body mt-3">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group mb-2">
              <label>Username</label>
              <input
                className="form-control"
                value={this.username}
                onChange={this.handleChange}
                name="username"
              ></input>
            </div>
            <div className="form-group mb-2">
              <label>E-mail</label>
              <input
                className="form-control"
                value={this.email}
                onChange={this.handleChange}
                name="email"
              ></input>
            </div>
            <div className="form-group mb-2">
              <label>Password</label>
              <input
                className="form-control"
                value={this.password}
                type="password"
                onChange={this.handleChange}
                name="password"
              ></input>
            </div>
            <div className="form-group mb-2">
              <label>Re-Enter Password</label>
              <input
                className="form-control"
                value={this.password2}
                type="password"
                onChange={this.handleChange}
                name="password2"
              ></input>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn-outline-success btn-sm" type="submit">
                Register
              </button>
            </div>
            <p className="text-center small mt-3">
              Already have an account?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
