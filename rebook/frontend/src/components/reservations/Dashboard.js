import React, { Fragment } from "react";
import Form from "./Form";
import Reservation from "./Reservation";
import NavBar from "../layouts/NavBar";

export default function Dashboard() {
  return (
    <Fragment>
      <NavBar />
      <div className="container">
        <br />
        <Form />
        <hr />
        <Reservation />
      </div>
    </Fragment>
  );
}
