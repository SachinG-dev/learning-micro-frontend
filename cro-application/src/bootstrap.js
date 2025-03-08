import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CroHome from "./CroHome.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CroHome title="CRO HOME" cart={[]} />
  </StrictMode>
);
