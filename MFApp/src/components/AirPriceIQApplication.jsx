import React, { lazy, Suspense } from "react";

const AirPriceIQ = lazy(() => import("AIR_PRICE_IQ_HOST/AirPriceIQHome"));

const AirPriceIQApplication = ({
  selectedFlightCode,
  setSelectedFlightCode,
}) => {
  return (
    <div className="container">
      <Suspense fallback="loading">
        <AirPriceIQ
          title="Air Price IQ"
          flightCodeFromParent={selectedFlightCode}
          setFlightCodeFromParent={setSelectedFlightCode}
        />
      </Suspense>
    </div>
  );
};

export default AirPriceIQApplication;
