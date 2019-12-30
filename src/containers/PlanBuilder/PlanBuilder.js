import React, { useEffect } from "react";
import MenuList from "../../components/Menu/MenuList";
import Plan from "../../components/Plan/Plan";
import Layout from "../../hocs/Layout/Layout";
import CategoryForm from "../../components/admin/Category/CategoryForm/CategoryForm";

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

  useEffect(() => {
    if (_.isEqual(actionTypes.GET_RESPONSE, actionType)) {
    }
    // sendRequest(constants.CATEGORIES_JSON, actionTypes.GET_METHOD);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dummyData = [
    {
      title: "Shortcut to Size",
      level: "Beginner",
      workOutLength: 45,
      duration: "12 weeks",
      link:
        "https://www.bodybuilding.com/images/2017/october/shortcut-to-size-logo-header-377x212.jpg"
    },
    {
      title: "Shortcut to Size",
      level: "Beginner",
      workOutLength: 45,
      duration: "12 weeks",
      link:
        "https://www.bodybuilding.com/images/2017/october/shortcut-to-size-logo-header-377x212.jpg"
    },
    {
      title: "Shortcut to Size",
      level: "Beginner",
      workOutLength: 45,
      duration: "12 weeks",
      link:
        "https://www.bodybuilding.com/images/2017/october/shortcut-to-size-logo-header-377x212.jpg"
    },
    {
      title: "Shortcut to Size",
      level: "Beginner",
      workOutLength: 45,
      duration: "12 weeks",
      link:
        "https://www.bodybuilding.com/images/2017/october/shortcut-to-size-logo-header-377x212.jpg"
    }
  ];

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
