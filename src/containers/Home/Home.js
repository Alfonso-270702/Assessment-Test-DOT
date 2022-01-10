import React from "react";
import { PokemonCard } from "../../components";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

export default function Home() {
  const pokemons = useSelector((state) => state.fetchPokemon.pokemons);

  const loading = useSelector((state) => state.fetchPokemon.loading);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center mt-5 w-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Row className="mt-4 m-0">
          {pokemons.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </Row>
      )}
    </>
  );
}
