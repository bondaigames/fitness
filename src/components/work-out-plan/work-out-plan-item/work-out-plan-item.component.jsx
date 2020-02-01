import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const WorkoutPlanItem = ({ exercises }) => {
  console.log("exerciseexerciseexercise: ", exercises);
  const { isSuperset } = exercises;

  const RenderNormalExercise = ({ dayworkout }) => {
    console.log("dayWorkout", dayworkout);

    const {
      note: { info, definition },
      exercise: { title, detailURL, image_1, image_2 }
    } = dayworkout;
    return (
      <div className="row no-gutters pb-1">
        <div className="col-md-12 col-lg-5 text-center">
          <a href={detailURL}>
            <img
              className="mr-1"
              style={{ width: "100px", height: "100px" }}
              src={image_1}
              alt={image_1}
            />
            <img
              style={{ width: "100px", height: "100px" }}
              src={image_2}
              alt={image_2}
            />
          </a>
        </div>
        <div className="col">
          <p className="font-weight-bold text-center text-lg-left">{title}</p>
          <p className="text-center text-lg-left mb-0">{info}</p>
          <p className="text-center text-lg-left mb-0">{definition}</p>
        </div>
      </div>
    );
  };

  const RenderSupersetExercise = ({ superset }) => {
    console.log("superset", superset);
    const { title, description, definition, sets } = superset;

    const transformRenderExercise = sets.map((set, id) => {
      console.log("id, set", id, set);
      return (
        <Fragment key={id}>
          <RenderNormalExercise dayworkout={set} />
        </Fragment>
      );
    });

    return (
      <Fragment>
        <p className="font-weight-bold text-center text-lg-left mb-0">
          {title}
        </p>
        <p className="text-center text-lg-left mb-0">{definition}</p>
        <p className="text-center text-lg-left">{description}</p>
        {transformRenderExercise}
      </Fragment>
    );
  };

  const RenderExercise = () => {
    if (isSuperset) {
      return (
        <Fragment>
          <RenderSupersetExercise {...exercises} />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <RenderNormalExercise {...exercises} />
        </Fragment>
      );
    }
  };

  return (
    <li className="list-group-item">
      {/* <div className="row no-gutters"> */}
      <RenderExercise />
      {/* </div> */}
    </li>
  );
};

export default WorkoutPlanItem;
