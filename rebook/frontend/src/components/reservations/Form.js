import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addCustomer } from "../../actions/customers";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    date: "",
  };

  static propTypes = {
    addCustomer: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, date } = this.state;
    const customer = { name, email, phone, date };
    this.props.addCustomer(customer);
    this.setState({
      name: "",
      email: "",
      phone: "",
      date: "",
    });
  };

  render() {
    const { name, email, phone, date } = this.state;
    const today = new Date();
    const time = "06:00:00";
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var todate = today.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (todate < 10) {
      todate = "0" + todate;
    }
    const min = year + "-" + month + "-" + todate + "T" + time;
    const max = year + 1 + "-" + 12 + "-" + 31 + "T" + time;
    return (
      <div className="card card-body">
        <h2>Add Reservation</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              value={name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              className="form-control"
              value={email}
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              className="form-control"
              value={phone}
              type="number"
              pattern="[0-9]{12}"
              name="phone"
              placeholder="Phone"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              className="form-control"
              id="dateTime"
              value={date}
              name="date"
              type="datetime-local"
              onChange={this.handleChange}
              min={min}
              max={max}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-sm btn-outline-success" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addCustomer })(Form);
