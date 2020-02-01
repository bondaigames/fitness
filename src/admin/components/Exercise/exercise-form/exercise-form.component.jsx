import React from "react";
import Spinner from "../../../../UI/Spinner/Spinner";
import { Field, reduxForm } from "redux-form";
import useFirebase from "../../../../hooks/axios/axios-firebase";
import useHTTPHook from "../../../../hooks/HttpHook";
import * as actionTypes from "../../../../hooks/actionTypes";
import Alert from "../../../../UI/Alert/Alert";

const ADD_EXERCISE = "ADD_EXERCISE";

const ExerciseForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const { axiosFireBase, constants } = useFirebase();
  const { isLoading, data, error, sendRequest, reqIdentifer } = useHTTPHook(
    axiosFireBase
  );
  const submitData = e => {
    console.log("data ex form: ", e);
    sendRequest(
      constants.EXERCISE_API,
      actionTypes.POST_METHOD,
      e,
      ADD_EXERCISE
    );
    reset();
  };
  return (
    <div className="card">
      <div className="card-header">Add new exercise</div>
      <div className="card-body">
        <form onSubmit={handleSubmit(submitData)}>
          <Alert message={data && data.message} error={error} />
          <Spinner isLoading={isLoading}>
            <div className="form-group">
              <label>Exercise Name:</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Please enter exercise name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Link Tutorial:</label>
              <Field
                name="detailURL"
                component="input"
                type="text"
                placeholder="Please enter link tutorial"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Link Image 1:</label>
              <Field
                name="image_1"
                component="input"
                type="text"
                placeholder="Please enter link image"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Link Image 2:</label>
              <Field
                name="image_2"
                component="input"
                type="text"
                placeholder="Please enter link image"
                className="form-control"
                required
              />
            </div>
            <button
              className="btn btn-secondary border rounded"
              type="submit"
              disabled={pristine || submitting}
            >
              Submit
            </button>
          </Spinner>
        </form>
      </div>
    </div>
  );
};
export default reduxForm({
  form: "ExerciseForm"
})(ExerciseForm);
