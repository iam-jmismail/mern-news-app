import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  CHECK_USER,
  SET_ERROR,
  CLEAR_ERROR,
  SIGN_OUT,
} from "../constants/index";
import config from "../config";

// Login
export const signIn = (user) => async (dispatch) => {
  const { email, password } = user;

  const body = {
    email,
    password,
  };

  const res = await fetch(`${config.API_URL}/api/auth`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (data.errors) {
    dispatch({
      type: SET_ERROR,
      payload: data.errors,
    });

    dispatch({
      type: AUTH_FAILED,
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR,
      });
    }, 2000);
  } else {
    dispatch({
      type: AUTH_SUCCESS,
      payload: {
        isAuthenticated: true,
        token: data.token,
      },
    });
    window.location.href = "/";
  }
};

// Check User Logged
export const checkUser = () => async (dispatch, getState) => {
  const authConfig = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  authConfig.headers["x-auth-token"] = getState().auth.token;
  const res = await fetch(`${config.API_URL}/api/auth`, authConfig);
  const data = await res.json();
  if (data) {
    dispatch({
      type: CHECK_USER,
      payload: data,
    });
  } else {
    dispatch({
      type: AUTH_FAILED,
    });
  }
};

// Sign Up
export const signUp = (formData) => async (dispatch) => {
  const { fname, lname, password, email, city, country } = formData;
  const body = {
    fname,
    lname,
    email,
    password,
    city,
    country,
  };

  const res = await fetch(`${config.API_URL}/api/user`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (data.errors) {
    dispatch({
      type: SET_ERROR,
      payload: data.errors,
    });

    dispatch({
      type: AUTH_FAILED,
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ERROR,
      });
    }, 2000);
  } else {
    dispatch({
      payload: {
        isAuthenticated: true,
        token: data.token,
      },
    });
    window.location.href = "/";
  }
};

export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
  });
};
