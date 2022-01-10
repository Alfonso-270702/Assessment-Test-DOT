import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonAsync } from "./store/actions/pokemonActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Pokemon, Home, Energy, Trainer, Favourite } from "./containers";
import { TopNavbar } from "./components";
import Login from "./Login";
import PrivateRoute from "./PrivateRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonAsync());
  }, []);

  return (
    <Router>
      <TopNavbar />
      <div>
        <Switch>
          <Route path="/pokemon">
            <Pokemon />
          </Route>
          <Route path="/trainer">
            <Trainer />
          </Route>
          <Route path="/energy">
            <Energy />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/fav">
            <Favourite />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
