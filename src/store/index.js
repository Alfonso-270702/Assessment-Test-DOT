import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { favouritePokemon, fetchPokemon, detailPokemon } from "./reducers";

const combine = combineReducers({
  favouritePokemon,
  fetchPokemon,
  detailPokemon,
});
const store = createStore(combine, applyMiddleware(thunk));

export default store;
