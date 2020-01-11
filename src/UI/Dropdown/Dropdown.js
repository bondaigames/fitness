import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = props => {
  const [state, setState] = useState({
    listOpen: false,
    headerTitle: props.title
  });

  const selectItem = (title, id, stateKey) => {
    setState(
      {
        headerTitle: title,
        listOpen: false
      },
      props.toggleSelected(id, stateKey)
    );
  };

  const toggleList = () => {
    setState(prevState => ({
      ...state,
      listOpen: !prevState.listOpen
    }));
  };

  return (
    <React.Fragment>
      <div className="dropdown mr-1">
        <button
          className="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded={state.listOpen}
          type="button"
          onClick={toggleList}
        >
          {state.headerTitle}
        </button>
        <div
          role="menu"
          className={state.listOpen ? "dropdown-menu show" : "dropdown-menu"}
        >
          {props.list.map(item => (
            <Link
              to="/"
              role="presentation"
              className="dropdown-item"
              key={item.id}
              onClick={() => selectItem(item.title, item.id, item.key)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
