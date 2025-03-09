import React, { lazy, Suspense } from "react";

const CroApplication = lazy(() => import("CRO_APPLICATION_HOST/CroHome"));

const CroApplicationPage = ({ selectedFlightCode, setSelectedFlightCode }) => {
  return (
    <div className="container">
      <Suspense fallback="loading">
        <CroApplication
          title="Cro Application"
          flightCodeFromParent={selectedFlightCode}
          setFlightCodeFromParent={setSelectedFlightCode}
        />
      </Suspense>
    </div>
  );
};

export default CroApplicationPage;
