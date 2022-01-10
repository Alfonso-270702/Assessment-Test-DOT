import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>Poke Poke</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={"/pokemon"}>
            Pokemon
          </Nav.Link>
          <Nav.Link as={Link} to={"/trainer"}>
            Trainer
          </Nav.Link>
          <Nav.Link as={Link} to={"/energy"}>
            Energy
          </Nav.Link>
          <Nav.Link as={Link} to={"/fav"}>
            Favourite
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
