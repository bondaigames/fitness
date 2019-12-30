import React from "react";
import PlanItem from "./PlanItem/PlanItem";

const plan = props => {
  const { items } = props;
  return (
    <div className="card form-group">
      <div className="card-header">{props.children}</div>
      <div className="card-body">
        <div className="row">
          {items.map(item => (
            <PlanItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default plan;
