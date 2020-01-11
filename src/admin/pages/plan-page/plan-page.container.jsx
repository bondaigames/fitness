import React from "react";
import { Switch, Route } from "react-router-dom";
// import PlanForm from "../../../components/admin/plan/plan-form/plan-form.component";
import Plans from "../../components/plan/plans.component";
import PlanForm from "../../components/plan/plan-form/plan-form.component";

const PlanPage = ({ match }) => {
  return (
    <React.Fragment>
      {/* <PlanForm></PlanForm> */}
      <Switch>
        <Route path={`${match.path}/create`}>
          <PlanForm mode="create"></PlanForm>
        </Route>
        <Route path={`${match.path}/:id`}>
          <PlanForm mode="edit"></PlanForm>
        </Route>
        <Route path={`${match.path}`} exact component={Plans}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default PlanPage;
