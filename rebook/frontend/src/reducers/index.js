import { combineReducers } from "redux";
import customerss from "./customers";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
  customersReducer: customerss,
  errors,
  messages,
  auth,
});
