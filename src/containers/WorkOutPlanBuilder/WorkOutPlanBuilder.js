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

// import useHTTPHook from "../../hooks/HttpHook";
// import axiosFireBase from "../../axios/axios-firebase";

const WorkOutPlanBuilder = React.memo(props => {
  const { axiosFireBase, constants } = useFirebase();
  const { isLoading, data, error, sendRequest } = useHTTPHook(axiosFireBase);
  console.log("WorkOutPlanBuilder rendering");

  useEffect(() => {
    sendRequest(constants.CATEGORIES_JSON, actionTypes.GET_METHOD);
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

  return (
    <Layout>
      <div className="row">
        <div
          className="col-md-3 d-sm-none d-md-block"
          style={{ display: "none" }}
        >
          <MenuList items={data} isLoading={isLoading}></MenuList>
        </div>
        <div className="col-sm-12 col-md-9">
          {/* <CategoryForm></CategoryForm> */}
          {/* <Plan items={dummyData}>All Plans</Plan>
          <Plan items={dummyData}>Muscle Building</Plan> */}
          <PlanForm></PlanForm>
        </div>
      </div>
    </Layout>
  );
});

export default WorkOutPlanBuilder;
