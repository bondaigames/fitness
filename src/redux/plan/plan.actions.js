import PlanActionTypes from "./plan.types";
import useApi from "../../hooks/axios/axios-aws";

export const fetchCollectionsStart = () => ({
  type: PlanActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: PlanActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: PlanActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

const { axiosApi, constants } = useApi();

export const fetchCollectionsPlan = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());

    const params = {
      limit: 3
    };
    axiosApi
      .get(constants.GET_PLANS, { params })
      .then(response => {
        console.log("get response", response);
        dispatch(fetchCollectionsSuccess(response.data));
      })
      .catch(err => {
        console.log("=======================", err);
        dispatch(fetchCollectionsFailure(err.message));
      });
  };
};

export const fetchPlanById = id => {
  return dispatch => {
    dispatch(fetchCollectionsStart());

    const url = `${constants.GET_PLANS}/${id}`;
    axiosApi
      .get(url)
      .then(response => {
        console.log("get response", response);
        dispatch(fetchCollectionsSuccess(response.data));
      })
      .catch(err => {
        console.log("=======================", err);
        dispatch(fetchCollectionsFailure(err.message));
      });
  };
};

export const fetchCollectionsPlanTesting = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());
    // dispatch(
    //   fetchCollectionsSuccess([
    //     {
    //       createDate: "2020-01-15T18:18:32.206Z",
    //       length: "45",
    //       duration: "12",
    //       title: "Shortcut to Size",
    //       link:
    //         "https://www.bodybuilding.com/images/2017/october/shortcut-to-size-logo-header-400x225.jpg",
    //       slug: "shortcut-to-size",
    //       level: "/plan-level/qk0zUuljVsVosWYOslb6",
    //       id: "XK3ERo7CNOeS8Nbwh0QK"
    //     }
    //   ])
    // );
    setTimeout(() => {
      dispatch(
        fetchCollectionsSuccess([
          {
            createDate: "2020-01-15T18:18:32.206Z",
            length: "45",
            duration: "12",
            title: "Shortcut to Size",
            link:
              "https://www.bodybuilding.com/images/2017/october/shortcut-to-size-logo-header-400x225.jpg",
            slug: "shortcut-to-size",
            level: "/plan-level/qk0zUuljVsVosWYOslb6",
            id: "XK3ERo7CNOeS8Nbwh0QK"
          }
        ])
      );
    }, 5000);

    // axiosFireBase
    //   .get(constants.GET_PLANS)
    //   .then(response => {
    //     console.log("get response", response);
    //     dispatch(fetchCollectionsSuccess(response.data));
    //   })
    //   .catch(err => {
    //     console.log("=======================", err);
    //     dispatch(fetchCollectionsFailure(err.message));
    //   });
  };
};
