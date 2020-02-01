import React, { useState } from "react";
import Spinner from "../../../UI/Spinner/Spinner";
import Alert from "../../../UI/Alert/Alert";

const ExerciseFormA = props => {
  const { isLoading, data, error, onAddExerciseHandler } = props;
  const [state, setState] = useState();
  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const addExerciseHandler = evt => {
    evt.preventDefault();
    onAddExerciseHandler(state);
    setState({});
  };
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">Add new exercise</div>
        <div className="card-body">
          <Alert
            message={data ? "Add new exercise successfully" : ""}
            error={error}
          />
          <Spinner loading={isLoading}>
            <div className="form-group">
              <label>Exercise Name:</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                className="form-control"
                placeholder="Please enter exercise name"
              />
            </div>
            <div className="form-group">
              <label>Link Tutorial:</label>
              <input
                type="text"
                name="detailURL"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Link Image 1:</label>
              <input
                type="text"
                name="link1"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Link Image 2:</label>
              <input
                type="text"
                name="link2"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button
              className="btn btn-secondary border rounded"
              type="button"
              onClick={addExerciseHandler}
            >
              Submit
            </button>
          </Spinner>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExerciseFormA;
