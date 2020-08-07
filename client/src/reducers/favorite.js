import {
  GET_FAVORITES,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from "../constants/index";

const initState = {
  favorites: [],
};

export default function (state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FAVORITES:
      return {
        ...state,
        favorites: payload,
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((items) => items._id !== payload),
        ],
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };

    default:
      return state;
  }
}
