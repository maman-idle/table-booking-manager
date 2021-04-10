import { GET_ERRORS, GET_MESSAGE } from "./types";

export const createMessage = (msg) => {
  return {
    type: GET_MESSAGE,
    payload: msg,
  };
};

//Errors
export const errorMsgs = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};
