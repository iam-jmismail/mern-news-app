import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  CHECK_USER,
  SIGN_OUT,
} from "../constants/index";

const initState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: null,
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: payload.isAuthenticated,
        token: payload.token,
      };

    case AUTH_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        token: localStorage.removeItem("token"),
        user: null,
      };

    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        token: localStorage.removeItem("token"),
        user: null,
      };

    case CHECK_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };

    default:
      return state;
  }
}
