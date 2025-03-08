import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AirPriceIQHome from "./AirPriceIQHome.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AirPriceIQHome title="AirPriceIQ" />
  </StrictMode>
);
