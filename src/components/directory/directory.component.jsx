import React from "react";
import { Switch, Route } from "react-router-dom";
import PlanPage from "../../pages/plan-page/plan-page.container";
import HomePage from "../../pages/homepage/homepage.container";
import Layout from "../../hocs/layout/layout-component";

const Directory = () => (
  <Layout>
    <Switch>
      <Route path="/plan" component={PlanPage}></Route>
      <Route path="/" exact component={HomePage}></Route>
    </Switch>
  </Layout>
);

export default Directory;
