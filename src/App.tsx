import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import Client from "./layout/client";
import Homepage from "./layout/homepage";
import ProductDetail from "./layout/productDetail";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Pay from "./component/Pay/Pay";
import Detailpay from "./component/Detailpay/Detailpay";
import End from "./component/End/End";
import History from "./component/History/History";
function App() {
  const Route = useRoutes([
    {
      path: "",
      Component: Client,
      children: [
        { path: "", Component: Homepage },
        { path: "products", Component: ProductDetail },
        {
          path: "pay",
          element: <Pay />,
        },
        {
          path: "detailpay",
          element: <Detailpay />,
        },
        {
          path: "end",
          element: <End />,
        },
        {
          path: "history",
          element: <History />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return Route;
}

export default App;
