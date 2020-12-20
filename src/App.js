import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Switch } from "react-router-dom";
import Directory from "./components/directory/directory.component";
//import AdminDirectory from "./admin/components/directory/directory.component";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        
        <Route path="/" component={Directory}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
