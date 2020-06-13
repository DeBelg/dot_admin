import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./login";

const Auth = () => {
  return (
    <div>
      <Route
        exact
        path="/"
        render={props => <Redirect to={{ pathname: "/login" }} />}
      />
      <Route path="/login" component={Login} />
    </div>
  );
};

export default Auth;
