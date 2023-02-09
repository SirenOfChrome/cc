import React from "react";
import Planeteer from "./Planeteer";

const PlaneteersContainer = (props) => {
  const { planeteers } = props;

  return (
    <div className="PlaneteersContainer">
      {planeteers.map((planeteer) => (
        <Planeteer key={planeteer.id} planeteer={planeteer} />
      ))}
    </div>
  );
};

export default PlaneteersContainer;
