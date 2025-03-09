import React, { Suspense, lazy, useState } from "react";
import CroApplicationPage from "./CroApplication.jsx";
import AirPriceIQApplication from "./AirPriceIQApplication.jsx";

export const BothApplicationCommunicationWithEachOther = () => {
  const [selectedFlightCode, setSelectedFlightCode] = useState("");
  console.log({ selectedFlightCode });
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#d9534f" }}>
        Both Applications Running Together
      </h2>
      <div
        style={{
          // display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <Suspense fallback={<div>Loading AirPrice IQ...</div>}>
          <AirPriceIQApplication
            title="AirPrice IQ"
            selectedFlightCode={selectedFlightCode}
            setSelectedFlightCode={setSelectedFlightCode}
          />
        </Suspense>

        <Suspense fallback={<div>Loading CRO Application...</div>}>
          <CroApplicationPage
            title="CRO Home"
            selectedFlightCode={selectedFlightCode}
            setSelectedFlightCode={setSelectedFlightCode}
          />
        </Suspense>
      </div>
    </div>
  );
};
