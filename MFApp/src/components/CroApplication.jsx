import React, { lazy } from "react";

const CroApplication = lazy(() => import("CRO_APPLICATION_HOST/CroHome"));

const CRO_APPLICATION = () => {
  return (
    <div className="container">
      <CroApplication />
    </div>
  );
};

export default CRO_APPLICATION;
