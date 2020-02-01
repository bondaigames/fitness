import React from "react";
import { Switch, Route } from "react-router-dom";
import PlanPage from "../../pages/plan-page/plan-page.component";
import HomePage from "../../pages/homepage/homepage.component";
import Layout from "../../hocs/layout/layout-component";

const Directory = () => (
  <Layout>
    <Switch>
      {/*
        /plans/all-plan/specificplan
      */}
      <Route path="/plans" component={PlanPage}></Route>
      <Route path="/" exact component={HomePage}></Route>
    </Switch>
  </Layout>
);

export default Directory;
