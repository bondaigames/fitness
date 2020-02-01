import React, { useEffect, useState } from "react";
import Spinner from "../../../../UI/Spinner/Spinner";
import Alert from "../../../../UI/Alert/Alert";
import {
  Field,
  FieldArray,
  arrayPush,
  reduxForm,
  arrayRemoveAll,
  formValueSelector,
  change
} from "redux-form";
import "./plan-form.styles.scss";
import useHTTPHook from "../../../../hooks/HttpHook";
import useFirebase from "../../../../hooks/axios/axios-firebase";
import * as actionTypes from "../../../../hooks/actionTypes";
import CustomDropdown from "../../../../UI/CustomDropdown/CustomDropdown.component";
import ListGroup from "../UI-Custom/list-group/list-group.component";
import ListCard from "../UI-Custom/list-card/list-card.component";
import _ from "lodash";
import { connect } from "react-redux";

const GET_ALL_EXERCISE = "GET_ALL_EXERCISE";
const ADD_EXERCISE = "ADD_EXERCISE";

const PlanForm = ({ handleSubmit, reset, mode, dispatch, daysValue }) => {
  const { axiosFireBase, constants } = useFirebase();
  const { isLoading, data, error, sendRequest, reqIdentifer } = useHTTPHook(
    axiosFireBase
  );

  //orginal data loaded from server
  const [exercises, setExercisesData] = useState([]);
  const [days, setDays] = useState([]);
  // const [selectedEx, setSelectedEx] = useState([]);

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
      const sorted = data.sort((a, b) => {
        // const isReversed = (sortType === 'asc') ? 1: -1;
        //return isReversed * a.title.localeCompare(b.title);
        return a.title.localeCompare(b.title);
      });

      setExercisesData(sorted);
    }
    // setExercisesData(data);
  }, [data, error, isLoading, reqIdentifer]);

  const handleSelectedRow = (item, idx, extraParams) => {
    console.log("extraParams, ", extraParams);
    const currentDay = [...days[extraParams.idx]];
    currentDay[idx].selected = !currentDay[idx].selected;
    console.log("after change monitor original data", exercises);

    const newDaysArray = [...days];
    days[extraParams.idx] = currentDay;
    setDays(newDaysArray);
    console.log("newDaysArray:", newDaysArray);
    updatedListSelectExercise(currentDay[idx], extraParams);
  };

  //Update selected list
  const updatedListSelectExercise = (newExObj, extraParams) => {
    console.log("[extraParams.idx].exercises", daysValue);
    // return;

    const newSelectedEx = _.cloneDeep(daysValue[extraParams.idx]);
    if (!newExObj.selected) {
      //remove item

      const filterArr = newSelectedEx.exercises.filter(
        item => item.id !== newExObj.id
      );
      newSelectedEx.exercises = filterArr;
      // setSelectedEx(newSelectedEx);
    } else {
      // const newSelectedEx = _.cloneDeep(selectedEx);
      newSelectedEx.exercises.push({
        ...newExObj
      });

      console.log("newExObjnewExObj", newExObj);
      // console.log("newSelectedEx", newSelectedEx);
      //   // dispatch(
      //   //   arrayPush(form, `${extraParams.tagName}[${extraParams.idx}].notes`, [])
      //   // );
    }

    console.log("newSelectedEx: ", newSelectedEx);

    // setSelectedEx(newSelectedEx);

    // dispatch(
    //   arrayRemoveAll(
    //     form,
    //     `${extraParams.tagName}[${extraParams.idx}].exercises`
    //   )
    // );
    dispatch(
      change(
        "PlanForm",
        `${extraParams.tagName}[${extraParams.idx}].exercises`,
        newSelectedEx.exercises
      )
    );
  };

  const handleRemoveExercise = index => {};

  /* format data
    [{
      days1: {

      } 
    }]
  */
  console.log("dispatch change: ", daysValue);
  const handleLoadDataByTagName = (tagName, idx) => {
    console.log(`tagname: ${tagName} and index: ${idx}`);

    const newArray = [...days, _.cloneDeep(exercises)];
    // const newSelectedArray = [...selectedEx, []];

    console.log("newArray: ", newArray);
    setDays(newArray);
    console.log(`${tagName}[${idx}].exercises`);
    dispatch(change("PlanForm", `${tagName}[${idx}].exercises`, []));
    console.log("after dispatch change: ", daysValue);
    // setSelectedEx(newSelectedArray);
    return newArray;
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

    console.log("form: ", e);
    //Move note to selected exercise list
    // const exerciseArray = selectedEx.map((item, idx) => {
    //   return { ...item, note: e.notes[idx] };
    // });

    // const params = {
    //   title: e.title,
    //   level: e.level,
    //   length: e.length,
    //   duration: e.duration,
    //   link: e.link,
    //   exercises: exerciseArray
    // };

    //sendRequest(constants.PLAN_API, actionTypes.POST_METHOD, e, ADD_EXERCISE);
    setDays([]);
    // setSelectedEx([]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className="form-group">
        <h4>Add new plan</h4>
      </div>
      {console.log("error", error)}
      <Alert message={data && data.message} error={error} />
      <Spinner data={data} isLoading={isLoading}>
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
          <div className="card-header">Workout calendar</div>
          <div className="card-body">
            {/* <h6>Exercises</h6> */}

            {/* <Field
              name="myField"
              component={CustomDropdown}
              data={exercises}
              handleSelectedRow={handleSelectedRow}
            /> */}
            <FieldArray
              name="days"
              component={ListCard}
              data={days}
              handleLoadDataByTagName={handleLoadDataByTagName}
              handleSelectedRow={handleSelectedRow}
              handleRemoveExercise={handleRemoveExercise}
            />
            {/* <FieldArray name="notes" component={ListGroup} items={selectedEx} /> */}
          </div>
        </div>

        <button className="btn btn-secondary border rounded" type="submit">
          Submit
        </button>
      </Spinner>
    </form>
  );
};

// PlanForm = reduxForm({
//   form: "PlanForm" // a unique identifier for this form
// })(PlanForm);

// const selector = formValueSelector("PlanForm"); // <-- same as form name
// PlanForm = connect(state => {
//   // can select values individually
//   const daysValue = selector(state, "days");
//   return {
//     daysValue
//   };
// })(PlanForm);

// export default PlanForm;

const PlanFormRedux = reduxForm({
  form: "PlanForm"
})(PlanForm);

const selector = formValueSelector("PlanForm");

const mapStateToProps = state => ({
  daysValue: selector(state, "days")
  // values: getFormValues("PlanForm")(state)
});

export default connect(mapStateToProps)(PlanFormRedux);
