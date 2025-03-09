import React, { Suspense, lazy } from "react";
import CroApplicationPage from "./CroApplication.jsx";
import AirPriceIQApplication from "./AirPriceIQApplication.jsx";

export const BothApplicationTogether = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#d9534f" }}>
        Both Applications Running Together
      </h2>
      <div
        style={{
          //   display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <Suspense fallback={<div>Loading AirPrice IQ...</div>}>
          <AirPriceIQApplication title="AirPrice IQ" />
        </Suspense>

        <Suspense fallback={<div>Loading CRO Application...</div>}>
          <CroApplicationPage title="CRO Home" />
        </Suspense>
      </div>
    </div>
  );
};
