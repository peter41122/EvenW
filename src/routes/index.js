import React from "react";
import { BrowserRouter, Routes as RoutePk, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <RoutePk>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </RoutePk>
      </BrowserRouter>
    </>
  );
};

export default Routes;
