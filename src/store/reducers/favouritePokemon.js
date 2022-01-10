import { ADD_FAVOURITE_POKEMON } from "../actions/types";

const initialState = {
  fav: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_POKEMON:
      return { ...state, fav: state.fav.concat(action.payload) };
    default:
      return state;
  }
};
