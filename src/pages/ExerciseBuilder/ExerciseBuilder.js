import React, { useEffect, useState, useCallback, useMemo } from "react";
import ExerciseForm from "../../components/admin/Exercise/ExerciseForm/ExerciseForm";
import Layout from "../../hocs/Layout/Layout";
import Spinner from "../../components/UI/Spinner/Spinner";

import useHTTPHook from "../../hooks/HttpHook";
import useFirebase from "../../hooks/axios/axios-firebase";
import * as actionTypes from "../../hooks/actionTypes";
import _ from "lodash";
import Alert from "../../components/UI/Alert/Alert";

const ExerciseBuilder = props => {
  const { axiosFireBase, constants } = useFirebase();
  const { isLoading, data, error, sendRequest, actionType } = useHTTPHook(
    axiosFireBase
  );
  const [exerciseParams, setExerciseParams] = useState({
    error: null
  });

  useEffect(() => {
    checkExerciseNameExist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, actionType]);

  const addExercise = () => {
    console.log("handle testing");
    const currentParams = exerciseParams;
    setExerciseParams(null);
    sendRequest(
      constants.EXERCISES_JSON,
      actionTypes.POST_METHOD,
      currentParams
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  console.log("=================");
  console.log("actionType outside", actionType);
  const checkExerciseNameExist = useCallback(() => {
    console.log("data, exer", data, exerciseParams);
    let found = false;
    console.log("actionType", actionType);
    //Nothing to do when access the page first time
    if (!_.isEqual(actionType, actionTypes.GET_RESPONSE)) {
      return;
    }

    if (_.isNil(exerciseParams)) {
      setExerciseParams({
        message: "Add new exercise successfuly",
        error: null
      });
      return;
    }

    console.log("data response: ", data);
    //No data in firebase
    if (_.isNil(data)) {
      found = false;
    } else {
      found =
        Object.keys(data).filter(
          key => data[key].title === exerciseParams.title
        ).length > 0;
    }

    if (!found) {
      console.log("not found");
      addExercise();
    } else {
      console.log("found");
      setExerciseParams({
        ...exerciseParams,
        error: "Enter another exercise name."
      });
    }
    //   if (!_.isNil(data) && !_.isEmpty(exerciseParams)) {

    //   }
  }, [actionType, addExercise, data, exerciseParams]);

  const addExerciseHandler = data => {
    const params = {
      ...data,
      createdDate: new Date()
    };
    setExerciseParams({ ...params });
    console.log("exerciseParams", exerciseParams);
    // sendRequest(
    //   constants.EXERCISES_JSON1,
    //   actionTypes.POST_METHOD,
    //   exerciseParams
    // );
    sendRequest(constants.EXERCISES_JSON, actionTypes.GET_METHOD);
  };

  let showAlert = "";

  if (!_.isNil(exerciseParams)) {
    showAlert = (
      <Alert message={exerciseParams.message} error={exerciseParams.error} />
    );
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-12">
          {showAlert}
          {/* <Alert
            message={exerciseParams.message}
            error={exerciseParams.error}
          /> */}

          <Spinner loading={isLoading}>
            <ExerciseForm
              onAddExerciseHandler={addExerciseHandler}
            ></ExerciseForm>
          </Spinner>
        </div>
      </div>
    </Layout>
  );
};

export default ExerciseBuilder;
