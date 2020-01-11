import React, { useEffect, useRef } from "react";
import "./CustomDropdown.styles.scss";
import $ from "jquery";

const CustomDropdown = props => {
  const ref = useRef(null);
  //   const {
  //     input: { value, onChange }
  //   } = props;
  const { handleSelectedRow, data } = props;

  const handleInputChange = e => {
    $("#dropdownMenuButton").dropdown("toggle");
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      $("#dropdownMenuButton").dropdown("hide");
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const mapItem = data.map((item, idx) => (
    <tr key={item + idx} onClick={() => handleSelectedRow(item, idx)}>
      <td>
        <div className="d-flex justify-content-start align-items-center">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ paddingRight: "5px", width: "30px" }}
          >
            {item.selected && (
              <svg
                className="octicon octicon-check"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
                ></path>
              </svg>
            )}
          </div>
          <div
            className="d-flex justify-content-start align-items-center"
            style={{ paddingRight: "5px" }}
          >
            {item.title}
          </div>
        </div>
      </td>

      {/* <td className="text-center">
        {item.selected && (
          <svg
            className="octicon octicon-check"
            viewBox="0 0 12 16"
            version="1.1"
            width="12"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"
            ></path>
          </svg>
        )}
      </td>
      <td style={{ width: "100%" }}>{item.title}</td> */}
    </tr>
  ));

  return (
    //   <div className="input-group">
    //     <div className="input-group-prepend">
    //       <span
    //         className="input-group-text"
    //         style={{ backgroundColor: "rgb(255,255,255)" }}
    //       >
    //         <svg
    //           className="octicon octicon-search"
    //           viewBox="0 0 16 16"
    //           version="1.1"
    //           width="16"
    //           height="16"
    //           aria-hidden="true"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
    //           ></path>
    //         </svg>
    //       </span>

    //     </div>
    //   </div>
    <div className="dropdown" ref={ref}>
      <input
        type="text"
        className="form-control dropdown-toggle"
        id="dropdownMenuButton"
        placeholder="Add new exercise"
        // value={value}
        onClick={handleInputChange}
      />
      {/* <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      > */}

      {/* </button> */}
      <div
        className={`dropdown-menu scroll-table `}
        style={{ width: "100%" }}
        aria-labelledby="dropdownMenuButton"
      >
        <table className="table table-borderless table-hover">
          <tbody>{mapItem}</tbody>
        </table>

        {/* <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="dropdown-item"
        >
          Inc
        </button>

        <button
          type="button"
          onClick={() => onChange(value - 1)}
          className="dropdown-item"
        >
          Dec
        </button> */}
      </div>
    </div>
  );
};

export default CustomDropdown;
