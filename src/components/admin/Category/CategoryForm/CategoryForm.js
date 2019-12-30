import React, { useCallback, useEffect, useState } from "react";
import useHTTPHook from "../../../../hooks/HttpHook";
import * as actionTypes from "../../../../hooks/actionTypes";
import Spinner from "../../../UI/Spinner/Spinner";
import useFirebase from "../../../../hooks/axios/axios-firebase";
import Alert from "../../../UI/Alert/Alert";
import _ from "lodash";

const CategoryForm = React.memo(props => {
  const { axiosFireBase, constants } = useFirebase();
  const { isLoading, data, error, sendRequest } = useHTTPHook(axiosFireBase);
  const [cateName, setCateName] = useState();

  const addCateHandler = useCallback(
    evt => {
      const params = {
        cateName: cateName,
        parentId: 0,
        createdDate: new Date()
      };
      sendRequest(constants.CATEGORIES_JSON, actionTypes.POST_METHOD, params);
    },
    [cateName, constants.CATEGORIES_JSON, sendRequest]
  );

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">Add new category</div>
        <div className="card-body">
          <Alert message={data ? data.statusText : ""} error={error} />
          <Spinner loading={isLoading}>
            <label>Category Name:</label>
            <input
              type="text"
              onChange={e => setCateName(e.target.value)}
              className="form-control form-group"
            />
            <button
              className="btn btn-secondary border rounded"
              type="button"
              onClick={addCateHandler}
            >
              Submit
            </button>
          </Spinner>
        </div>
      </div>
    </React.Fragment>
  );
});

export default CategoryForm;
