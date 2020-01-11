import React, { useEffect, useState } from "react";
import PlanCollection from "../../components/plan/plan-collection.container";
import { PLAN_DATA } from "../../components/db/dummy-db";
// import PlanDetail from "../../components/plan-detail/plan-detail.component";

const HomePage = () => {
  const [plansData, setPlansData] = useState([]);
  useEffect(() => {
    setPlansData(PLAN_DATA);
  }, []);
  return (
    <div className="row">
      <div className="col-sm-12">
        <PlanCollection items={plansData}>All Plans</PlanCollection>
      </div>
    </div>
  );
};

export default HomePage;
