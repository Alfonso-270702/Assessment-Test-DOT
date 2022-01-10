import React from "react";

import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { addFavouritePokemon } from "../../store/actions/pokemonActions";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import "./style.css";

export default function PokemonCard({ pokemon, type }) {
  const dispatch = useDispatch();

  const favPage = (data) => {
    dispatch(addFavouritePokemon(data));
    Swal.fire({
      icon: "success",
      title: "Success add to favourite",
    });
  };

  return (
    <Col
      lg={3}
      md={4}
      xs={6}
      className="mb-3 d-flex justify-content-around p-0"
    >
      <div className="main-container">
        <div className="the-card">
          <div className="front-card">
            <Image
              src={pokemon.imageUrlHiRes}
              style={{ width: "100%", height: "100%" }}
              rounded
            />
          </div>
          <div className="back-card">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                alignItems: "center",
                backgroundColor: "#ecf4f3",
              }}
            >
              <div>
                <Button
                  className="mr-2 btn-danger"
                  onClick={() => favPage(pokemon)}
                >
                  Add Favourite
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}
