import React from "react";

const menuItem = props => {
  return (
    <li className="list-group-item">
      <span>{props.children}</span>
    </li>
  );
};

export default menuItem;
