import React from "react";
import Layout from "../../hocs/Layout/Layout";

import useHTTPHook from "../../hooks/HttpHook";
import * as actionTypes from "../../hooks/actionTypes";
import Spinner from "../../components/UI/Spinner/Spinner";
import useFirebase from "../../hooks/axios/axios-firebase";
import Alert from "../../components/UI/Alert/Alert";
import _ from "lodash";
import PlanForm from "../../components/admin/Plan/PlanForm/PlanForm";

const PlanBuilder = React.memo(props => {
  const { axiosFireBase, constants } = useFirebase();
  const { isLoading, data, error, sendRequest, actionType } = useHTTPHook(
    axiosFireBase
  );
  console.log("PlanBuilder rendering");

  const addPlanHandler = plan => {
    console.log(plan);
    const params = {
      ...plan,
      createdDate: new Date()
    };
    sendRequest(constants.PLANS_JSON, actionTypes.POST_METHOD, params);
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-12">
          <Spinner loading={isLoading}>
            <PlanForm onAddPlanHandler={addPlanHandler}></PlanForm>
          </Spinner>
        </div>
      </div>
    </Layout>
  );
});

export default PlanBuilder;
