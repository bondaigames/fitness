import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Switch } from "react-router-dom";
import WorkOutPlanBuilder from "./containers/WorkOutPlanBuilder/WorkOutPlanBuilder";
import PlanBuilder from "./containers/PlanBuilder/PlanBuilder";

const app = props => {
  return (
    <Switch>
      <Route path="/" exact component={PlanBuilder}></Route>
      {/* <Route path="/" exact component={WorkOutPlanBuilder} /> */}
    </Switch>
  );
};

export default app;
