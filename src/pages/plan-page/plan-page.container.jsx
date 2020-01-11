import React from "react";
import PlanSideBar from "../../components/plan-side-bar/plan-side-bar.component";
import { Switch, Route } from "react-router-dom";
import PlanDetail from "../../components/plan-detail/plan-detail.component";

const PlanPage = ({ match }) => (
  <div>
    <PlanSideBar></PlanSideBar>
    {match.path}
    <Switch>
      <Route path={`${match.path}/:planId`} component={PlanDetail}></Route>
    </Switch>
  </div>
);

export default PlanPage;
