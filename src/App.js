import React from "react";
import { ToastContainer } from "react-toastify";
import Routes from "./routes";
import "./assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
      <Routes />
    </>
  );
}

export default App;
