import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";
const PlanDetailContainer = lazy(() =>
  import("./plan-detail/plan-detail.container")
);

const PlanPage = ({ match }) => {
  console.log("Plan page rendering");

  return (
    <div className="container">
      <div className="row">
        <Switch>
          {/* //load all plans here via route
            //Load List plan by category
          */}
          <Suspense fallback={<Spinner />}>
            <Route
              path={`${match.path}/:slug/:id`}
              component={PlanDetailContainer}
            ></Route>
          </Suspense>
        </Switch>
      </div>
    </div>
  );
};

export default PlanPage;
