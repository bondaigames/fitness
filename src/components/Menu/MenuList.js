import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import Spinner from "../UI/Spinner/Spinner";

const MenuList = props => {
  const { items, isLoading } = props;

  const menuItems = items
    ? Object.keys(items).map((key, index) => {
        return <MenuItem key={key + index}>{items[key].cateName}</MenuItem>;
      })
    : "";

  return (
    <ul className="list-group">
      <Spinner loading={isLoading}>{menuItems}</Spinner>
    </ul>
  );
};

export default MenuList;
