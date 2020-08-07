import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import favorite from "./favorite";

export default combineReducers({
  auth,
  errors,
  favorite,
});
