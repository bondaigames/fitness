import React from "react";
import { Switch, Route } from "react-router-dom";
import PlanPage from "../../pages/plan-page/plan-page.container";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

const Directory = () => (
  <React.Fragment>
    <Header />
    <div className="container">
      <Switch>
        {/* <Route path="/plan" component={PlanPage}></Route> */}
        <Route path="/admin/plan" component={PlanPage}></Route>
        {/* <Route path="/admin" exact component={AdminPlanPage}></Route> */}
      </Switch>
    </div>
    <Footer />
  </React.Fragment>
);
export default Directory;
