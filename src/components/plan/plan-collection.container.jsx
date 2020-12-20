import React from "react";
import PlanItem from "./plan-item/plan-item.component";

const PlanCollection = ({ collections, children }) => {
  console.log("PlanCollection rendering" + collections);
  return (
    <div className="card form-group">
      <div className="card-header">{children}</div>
      <div className="card-body">
        <div className="row">
          {collections.map((item, idx) => (
            <PlanItem key={item + "" + idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanCollection;
