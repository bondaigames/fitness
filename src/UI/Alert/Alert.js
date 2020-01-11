import React from "react";

const Alert = props => {
  let data = "";
  if (props.error) {
    data = (
      <div className="alert alert-danger" role="alert">
        {props.error}
      </div>
    );
  } else {
    if (props.message)
      data = (
        <div className="alert alert-success" role="alert">
          {props.message}
        </div>
      );
  }
  return <React.Fragment>{data}</React.Fragment>;
};
export default Alert;
