import { GET_POKEMONS, LOADING } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
