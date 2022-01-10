import {
  GET_POKEMONS,
  ADD_FAVOURITE_POKEMON,
  DETAIL_POKEMON,
  LOADING,
} from "./types";

import Swal from "sweetalert2";

export const getPokemon = (pokemons) => {
  return {
    type: GET_POKEMONS,
    payload: pokemons,
  };
};

export const getPokemonAsync = () => {
  return (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    fetch("https://api.pokemontcg.io/v1/cards")
      .then((res) => res.json())
      .then((data) => {
        dispatch(getPokemon(data.cards));
        dispatch({ type: LOADING, payload: false });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please refresh the browser again",
        });
      });
  };
};

export const addFavouritePokemon = (pokemon) => {
  return {
    type: ADD_FAVOURITE_POKEMON,
    payload: pokemon,
  };
};

export const detailPokemon = (pokemon) => {
  return {
    type: DETAIL_POKEMON,
    payload: pokemon,
  };
};
