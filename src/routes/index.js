import React from "react";
import { BrowserRouter, Routes as RoutePk, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import RecoveryPassword from "../pages/auth/recoveryPassword";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <RoutePk>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password/reset" element={<RecoveryPassword />} />
          </Route>
        </RoutePk>
      </BrowserRouter>
    </>
  );
};

export default Routes;
