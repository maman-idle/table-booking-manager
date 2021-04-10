import axios from "axios";
import { createMessage, errorMsgs } from "./messages";
import { tokenConfig } from "./auth";

import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER } from "./types";

export const getCustomers = () => (dispatch, getState) => {
  axios
    .get("/api/customers/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(errorMsgs(err.response.data, err.response.status))
    );
};

export const deleteCustomer = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/customers/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteReservation: "Reservation Deleted" }));
      dispatch({
        type: DELETE_CUSTOMER,
        payload: id,
      });
    })
    .catch((err) =>
      dispatch(errorMsgs(err.response.data, err.response.status))
    );
};

export const addCustomer = (customer) => (dispatch, getState) => {
  axios
    .post("/api/customers/", customer, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addReservation: "Reservation Added" }));
      dispatch({
        type: ADD_CUSTOMER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(errorMsgs(err.response.data, err.response.status))
    );
};
