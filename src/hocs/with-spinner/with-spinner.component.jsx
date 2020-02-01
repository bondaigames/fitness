import React from "react";
import Spinner from "../../UI/Spinner/Spinner";

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  console.log("isloading fron hoc", isLoading);
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
