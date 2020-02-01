import React from "react";
import ListGroupItem from "./list-group-item/list-group-item";

const ListGroup = props => {
  const { items, fields } = props;
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        {items.map((item, idx) => {
          const params = {
            ...item,
            idx: idx,
            note: `${fields.name}[${idx}]`
          };
          return <ListGroupItem key={item + idx} {...params} />;
        })}
      </li>
    </ul>
  );
};

export default ListGroup;
