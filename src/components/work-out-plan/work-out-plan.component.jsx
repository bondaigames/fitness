import React from "react";
import WorkoutPlanItem from "./work-out-plan-item/work-out-plan-item.component";
import { withRouter } from "react-router-dom";
import _ from "lodash";

const WorkoutPlan = ({ collection, match }) => {
  console.log("collection workout plan: ", collection, match);
  const { title, link, level, duration, length, days } = collection;

  const RenderWorkoutPlan = () => {
    if (collection.length === 0) return null;

    const dayIdParam = Number.parseInt(match.params.dayId);

    const { muscle_group, description, exercises } = days[dayIdParam - 1];
    const plan = [];

    plan.push(
      <h5 className="text-success" key={muscle_group}>
        {muscle_group}
      </h5>
    );
    plan.push(
      <p className="text-center text-lg-left mb-0" key={description}>
        {description}
      </p>
    );

    const listEx = exercises.map((item, idx) => {
      return (
        <WorkoutPlanItem key={item + idx} exercises={item}></WorkoutPlanItem>
      );
    });

    plan.push(listEx);

    return <React.Fragment>{plan}</React.Fragment>;
  };

  return (
    <div className="col">
      <div className="form-group"></div>
      <div className="form-group">
        <h4 className="text-success">Workout plan</h4>
        <RenderWorkoutPlan />
      </div>
    </div>
  );
};

export default withRouter(WorkoutPlan);
