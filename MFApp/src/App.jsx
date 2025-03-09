import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CroApplication from "./components/CroApplication.jsx";
import AirPriceIQApplication from "./components/AirPriceIQApplication.jsx";

import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";

import "./style.css";
import ShellHomePage from "./components/ShellHomePage.jsx";
import { BothApplicationTogether } from "./components/BothApplicationTogether.jsx";
import { BothApplicationCommunicationWithEachOther } from "./components/BothApplicationCommunicationWithEachOther.jsx";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const callbackParent = (newItem) => {
    setCartItems((cartItems) => {
      const existingItem = cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return cartItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cartItems, { ...newItem, quantity: 1 }];
      }
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout cart={cartItems} />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <ShellHomePage />,
        },
        {
          path: "/cro-application",
          element: <CroApplication />,
        },
        {
          path: "/air-price-iq",
          element: <AirPriceIQApplication />,
        },
        {
          path: "/cro-and-air-price-iq",
          element: <BothApplicationTogether />,
        },
        {
          path: "/cro-and-air-price-iq-communicate",
          element: <BothApplicationCommunicationWithEachOther />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
