import React from "react";
import { BrowserRouter } from "react-router-dom";
import Auth from "./views/auth";
import Admin from "./redux/containers/AdminContainer";

const Router = () => (
  <BrowserRouter>
    <Auth />
    <Admin />
  </BrowserRouter>
);

export default Router;
