import React from "react";

import ObjectSelector from "../components/ObjectSelector";
import Canvas from "../components/Canvas";

const PlannerPage = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ObjectSelector />
      <Canvas />
    </div>
  );
};

export default PlannerPage;
