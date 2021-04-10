import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alert extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`); //join msg from error array so it becomes string
      if (error.msg.email) alert.error(`E-mail: ${error.msg.email.join()}`);
      if (error.msg.phone) alert.error(`Phone: ${error.msg.phone.join()}`);
      if (error.msg.date) alert.error(`Date: ${error.msg.date.join()}`);

      if (error.msg.username)
        alert.error(`Username: ${error.msg.username.join()}`);
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors);
    }
    if (message !== prevProps.message) {
      if (message.addReservation) alert.success(message.addReservation);
      if (message.deleteReservation) alert.success(message.deleteReservation);
      if (message.missMatch) alert.error(message.missMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  //CALLED STATE FROM ROOT REDUCER
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alert)); //update from react-alert api, need empty parenthesis while using withAlert
