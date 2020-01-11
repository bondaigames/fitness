import React from "react";
import PlanItem from "./plan-item/plan-item.component";

const PlanCollection = ({ items, children }) => {
  console.log("PlanCollection rendering");
  return (
    <div className="card form-group">
      <div className="card-header">{children}</div>
      <div className="card-body">
        <div className="row">
          {items.map((item, idx) => (
            <PlanItem key={item + "" + idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanCollection;
