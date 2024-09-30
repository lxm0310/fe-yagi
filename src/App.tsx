import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Client from "./layout/client";
import Homepage from "./layout/homepage";
import ProductDetail from "./layout/productDetail";
function App() {
  const Route = useRoutes([
    {
      path: "",
      Component: Client,
      children: [
        { path: "", Component: Homepage },
        { path: "products", Component: ProductDetail },
      ],
    },
  ]);
  return Route;
}

export default App;
