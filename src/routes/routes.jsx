import { configureStore } from "@reduxjs/toolkit";
import { Registreshen } from "../pages/Registreshen";
import { Mainpages } from "../pages/Mainpages";
import { createBrowserRouter } from "react-router-dom";
import Loginpages from "../pages/Loginpages";
import { Privaterouter } from "./Privaterouter";
import Main from "../components/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Registreshen />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/login",
    element: <Loginpages />,
  },
]);
