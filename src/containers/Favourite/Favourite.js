import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Pokemon() {
  const pokemons = useSelector((state) => state.favouritePokemon.fav);

  return (
    <>
      <Row className="mt-4 m-0">
        {pokemons.map((pokemon, index) => (
          <Col
            lg={3}
            md={4}
            xs={6}
            className="mb-3 d-flex justify-content-around p-0"
            key={index}
          >
            <div className="main-container">
              <Image
                src={pokemon.imageUrlHiRes}
                style={{ width: "100%", height: "100%" }}
                rounded
              />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}
