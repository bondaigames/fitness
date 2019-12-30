import { useReducer, useCallback } from "react";
import * as actionTypes from "./actionTypes";

const httpReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SEND_REQUEST: {
      return {
        loading: true,
        error: null,
        data: null,
        actionType: action.type
      };
    }
    case actionTypes.GET_RESPONSE: {
      return {
        ...state,
        loading: false,
        data: action.responseData,
        actionType: action.type
      };
    }
    case actionTypes.GET_ERROR: {
      return {
        loading: false,
        error: action.errorMessage,
        actionType: action.type
      };
    }
    case actionTypes.CLEAR_ERROR: {
      return { ...state, error: null, actionType: action.type };
    }
    default:
      throw new Error("Should not be reached!");
  }
};

const useHTTPHook = axios => {
  const [state, dispatch] = useReducer(httpReducer, {
    loading: false,
    error: null
  });

  const sendRequest = useCallback(
    (url, method, params) => {
      console.log("url: ", url);
      dispatch({ type: actionTypes.SEND_REQUEST });

      axios({
        method: method,
        url: url,
        data: JSON.stringify(params)
      })
        .then(response => {
          dispatch({
            type: actionTypes.GET_RESPONSE,
            responseData: response.data
          });
        })
        .catch(err => {
          dispatch({
            type: actionTypes.GET_ERROR,
            errorMessage: err.message
          });
        });
    },
    [axios]
  );

  return {
    isLoading: state.loading,
    data: state.data,
    error: state.error,
    sendRequest: sendRequest,
    actionType: state.actionType
  };
};

export default useHTTPHook;
