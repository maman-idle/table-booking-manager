import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.bool,
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container col-md-4 m-auto">
        <div className="card card-body mt-3">
          <h2 className="text-center">Login</h2>
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
              <label>Password</label>
              <input
                className="form-control"
                value={this.password}
                type="password"
                onChange={this.handleChange}
                name="password"
              ></input>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn-outline-success btn-sm" type="submit">
                Login
              </button>
            </div>
            <p className="text-center small mt-3">
              Doesn't have an account?{" "}
              <span>
                <Link to="/register">Register</Link>
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

export default connect(mapStateToProps, { login })(Login);
