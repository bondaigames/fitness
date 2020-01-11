import React, { useEffect, useState } from "react";
import Spinner from "../../../../UI/Spinner/Spinner";
import Alert from "../../../../UI/Alert/Alert";
import { Field, FieldArray, arrayPush, reduxForm } from "redux-form";
import "./plan-form.styles.scss";
import useHTTPHook from "../../../../hooks/HttpHook";
import useFirebase from "../../../../hooks/axios/axios-firebase";
import * as actionTypes from "../../../../hooks/actionTypes";
import CustomDropdown from "../../../../UI/CustomDropdown/CustomDropdown.component";
import ListGroup from "../UI-Custom/list-group/list-group.component";

const GET_ALL_EXERCISE = "GET_ALL_EXERCISE";
const ADD_EXERCISE = "ADD_EXERCISE";

const PlanForm = ({ handleSubmit, reset, mode, dispatch, form }) => {
  const { axiosFireBase, constants } = useFirebase();
  const { isLoading, data, error, sendRequest, reqIdentifer } = useHTTPHook(
    axiosFireBase
  );

  const [exercises, setExercisesData] = useState([]);
  const [selectedEx, setSelectedEx] = useState([]);

  console.log("current mode:", mode);

  useEffect(() => {
    sendRequest(
      constants.GET_ALL_EXERCISE_API,
      actionTypes.GET_METHOD,
      null,
      GET_ALL_EXERCISE
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading && !error && reqIdentifer === GET_ALL_EXERCISE) {
      setExercisesData(data);
    }
    // setExercisesData(data);
  }, [data, error, isLoading, reqIdentifer]);

  const handleSelectedRow = (item, idx) => {
    const newExArray = [...exercises];
    newExArray[idx].selected = !newExArray[idx].selected;
    setExercisesData(newExArray);
    updatedSelectEx(newExArray[idx]);
  };

  //Update selected list
  const updatedSelectEx = newExObj => {
    if (!newExObj.selected) {
      //remove item

      const filterArr = selectedEx.filter(item => item.id !== newExObj.id);
      setSelectedEx(filterArr);
    } else {
      const newSelectedEx = [...selectedEx, newExObj];
      setSelectedEx(newSelectedEx);
      dispatch(arrayPush(form, "notes", []));
    }
  };

  const submitData = e => {
    // if (_.isEmpty(e)) {
    //   alert("Please filling data");
    //   return;
    // }
    if (e.level === "-1") {
      alert("Please choose level");
      return;
    }

    //Move note to selected exercise list
    const exerciseArray = selectedEx.map((item, idx) => {
      return { ...item, note: e.notes[idx] };
    });

    const params = {
      title: e.title,
      level: e.level,
      length: e.length,
      duration: e.duration,
      link: e.link,
      exercises: exerciseArray
    };

    sendRequest(
      constants.PLAN_API,
      actionTypes.POST_METHOD,
      params,
      ADD_EXERCISE
    );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className="form-group">
        <h4>Add new plan</h4>
      </div>
      {console.log("error", error)}
      <Alert message={data && data.message} error={error} />
      <Spinner loading={isLoading}>
        <div className="card form-group">
          <div className="card-body">
            <div className="form-group">
              <label>Title:</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Please enter title"
                className="form-control"
                required
                // oninvalid="Please enter on alphabets only."
              />
            </div>
            <div className="form-group">
              <label>Level:</label>
              <Field name="level" className=" form-control" component="select">
                <option value="-1">Choose Level</option>
                <option value="/plan-level/qk0zUuljVsVosWYOslb6">
                  Beginner
                </option>
                <option value="/plan-level/wXhQlUtTF9cOhkU1rrJT">
                  Intermediate
                </option>
                <option value="/plan-level/JW9oxT8NAamvW8uEHb7n">
                  Advanced
                </option>
              </Field>
            </div>
            <div className="form-group">
              <label>Length:</label>
              <Field
                name="length"
                component="input"
                type="number"
                min="1"
                max="60"
                placeholder="Please enter minutes"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Duration (weeks):</label>
              <Field
                name="duration"
                component="input"
                type="number"
                min="1"
                max="60"
                placeholder="Please enter number of weeks"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label>Link Image:</label>
              <Field
                name="link"
                component="input"
                type="url"
                placeholder="Please enter link"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h6>Exercises</h6>

            <Field
              name="myField"
              component={CustomDropdown}
              data={exercises}
              handleSelectedRow={handleSelectedRow}
            />
            <FieldArray name="notes" component={ListGroup} items={selectedEx} />
          </div>
        </div>

        <button className="btn btn-secondary border rounded" type="submit">
          Submit
        </button>
      </Spinner>
    </form>
  );
};

export default reduxForm({
  form: "PlanForm"
})(PlanForm);
