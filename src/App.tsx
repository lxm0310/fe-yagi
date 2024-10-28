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
import Category from "./static_page/Category";
import Love from "./static_page/Love";
import Introduce from "./static_page/Introduce";
import Service from "./static_page/Service";
import News from "./static_page/News";
import Contact from "./static_page/Contact";
import ErrorPage from "./component/error/errorpage";
function App() {
  // test
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
        { path: "danhmuc", Component: Category },
        { path: "yeuthich", Component: Love },
        { path: "gioithieu", Component: Introduce },
        { path: "dichvu", Component: Service },
        { path: "tintuc", Component: News },
        { path: "lienhe", Component: Contact },
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
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return Route;
}

export default App;
