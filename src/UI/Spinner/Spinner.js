import React from "react";

const Spinner = props => {
  let data = (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
  if (!props.loading) {
    data = props.children;
  }
  return <React.Fragment>{data}</React.Fragment>;
};
export default Spinner;
