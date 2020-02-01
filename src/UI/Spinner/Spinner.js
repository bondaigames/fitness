import React from "react";

const Spinner = props => {
  let data = (
    <div className="text-center col">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
  //&& props.data
  if (!props.isLoading && props.data) {
    console.log("testing children");
    data = props.children;
  }

  return <React.Fragment>{data}</React.Fragment>;
};
export default Spinner;
