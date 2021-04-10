import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/Header.js";
import Alerts from "./layouts/Alert";
import Login from "./forms/Login";
import Register from "./forms/Register";
import NavBar from "./layouts/NavBar";
import Dashboard from "./reservations/Dashboard";

import { Provider } from "react-redux";
import store from "../store.js";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./common/PrivateRoute";

import { loadUser } from "../actions/auth";

//Alert options
const alertOption = {
  timeout: 4500, //in ms
  position: "top right",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOption}>
          <Router>
            <Fragment>
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/login">
                  <NavBar />
                  <Login />
                </Route>
                <Route path="/register">
                  <NavBar />
                  <Register />
                </Route>
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
