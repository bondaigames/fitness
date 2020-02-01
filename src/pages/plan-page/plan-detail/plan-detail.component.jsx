import React, { useEffect, Suspense, lazy } from "react";
import WorkoutPlan from "../../../components/work-out-plan/work-out-plan.component";
// import PlanSideBar from "../../../components/plan-side-bar/plan-side-bar.component";
import { reduxForm } from "redux-form";
import Spinner from "../../../UI/Spinner/Spinner";
import { Route } from "react-router-dom";

// import PlanSideBar from "../../../components/plan-side-bar/plan-side-bar.component";
const PlanSideBar = lazy(() =>
  import("../../../components/plan-side-bar/plan-side-bar.component")
);

const PlanDetail = ({ collection, match, isLoading, fetchPlanById }) => {
  console.log("plan detail rendering");
  console.log("collection: ", collection, isLoading);
  console.log("week number: ", Number.parseInt(1 / 8));

  useEffect(() => {
    console.log("user effect PlanDetail");
    fetchPlanById(match.params.id);
    return () => console.log("Unmounting");
  }, [fetchPlanById, match.params.id]);

  return (
    <Suspense fallback={<Spinner />}>
      <Spinner data={collection} isLoading={isLoading}>
        <div className="col-md-5 col-lg-4 d-md-block d-none">
          <PlanSideBar collection={collection} />
        </div>
        <div className="col">
          <Route path={`${match.path}/days/:dayId`}>
            <WorkoutPlan collection={collection} />
          </Route>
        </div>
      </Spinner>
    </Suspense>
  );
};

const PlanDetailRedux = reduxForm({
  form: "PlanDetail" // a unique identifier for this form
})(PlanDetail);

export default PlanDetailRedux;
