import React from "react";
import { Switch, Route } from "react-router-dom";
import ExerciseForm from "../../components/exercise/exercise-form/exercise-form.component";

const ExercisePage = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.path}/create`}>
        <ExerciseForm mode="create"></ExerciseForm>
      </Route>
      <Route path={`${match.path}/:id`}>
        <ExerciseForm mode="edit"></ExerciseForm>
      </Route>
    </Switch>
  );
};

export default ExercisePage;
