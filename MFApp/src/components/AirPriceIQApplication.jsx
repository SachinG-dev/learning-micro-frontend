import React, { lazy } from "react";

const AirPriceIQ = lazy(() => import("AIR_PRICE_IQ_HOST/AirPriceIQHome"));

const AirPriceIQApplication = () => {
  return (
    <div className="container">
      <AirPriceIQ />
    </div>
  );
};

export default AirPriceIQApplication;
