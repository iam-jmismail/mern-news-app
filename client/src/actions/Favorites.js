import {
  GET_FAVORITES,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from "../constants/index";
import config from "../config";

export const getFavorites = () => async (dispatch, getState) => {
  const res = await fetch(
    `${config.API_URL}/api/favorite`,
    authConfig(getState, "GET")
  );
  const data = await res.json();
  if (data) {
    dispatch({
      type: GET_FAVORITES,
      payload: data,
    });
  }
};

export const addFavorite = (favorite) => async (dispatch, getState) => {
  const { title, description, content, publishedAt, source, url } = favorite;

  const body = {
    title,
    description,
    content,
    publishedAt,
    source,
    url,
  };

  const res = await fetch(
    `${config.API_URL}/api/favorite`,
    authConfig(getState, "POST", body)
  );
  const data = await res.json();
  if (data) {
    dispatch({
      type: ADD_FAVORITES,
      payload: data,
    });
  }
};

export const deleteFavorite = (id) => async (dispatch, getState) => {
  const res = await fetch(
    `${config.API_URL}/api/favorite/${id}`,
    authConfig(getState, "DELETE")
  );
  const data = await res.json();
  if (data) {
    dispatch({
      type: REMOVE_FAVORITES,
      payload: data._id,
    });
  }
};

export const authConfig = (getState, type, body) => {
  const authConfig = {
    method: type,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  authConfig.headers["x-auth-token"] = getState().auth.token;
  return authConfig;
};
