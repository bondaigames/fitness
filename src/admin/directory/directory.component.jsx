import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminPlanPage from "../../../pages/admin/plan-page/plan-page.container";
import Header from "../components/header/header.component";
import Footer from "../footer/footer.component";

const Directory = () => (
  <React.Fragment>
    <Header />
    <Switch>
      {/* <Route path="/plan" component={PlanPage}></Route> */}
      <Route path="/admin/plan" component={AdminPlanPage}></Route>
      {/* <Route path="/admin" exact component={AdminPlanPage}></Route> */}
    </Switch>
    <Footer />
  </React.Fragment>
);
export default Directory;
