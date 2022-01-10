import { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";

import fakeAuth from "./helpers/auth";

import "./App.css";

export default function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const { state } = useLocation();

  const login = () =>
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <div className="App mt-4">
      <p>You must log in to view favourite page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
