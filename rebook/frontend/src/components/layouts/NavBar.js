import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class NavBar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome, ${user.username}` : ""}</strong>
        </span>
        <li className="nav-item">
          <button
            className="nav-link btn btn-success btn-sm text-dark font-weight-bold"
            onClick={this.props.logout}
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Restaurant Reservation Manager
          </a>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
          ></div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
