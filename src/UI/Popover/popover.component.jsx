import React, { useEffect, useRef } from "react";
import "./popover.styles.scss";
import $ from "jquery";
const Popovers = props => {
  const initialVal = {
    showTable: false
  };
  const ref = useRef(null);
  useEffect(() => {
    $('[data-toggle="popover"]').popover();
    onChange(initialVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleClickOutside = event => {
  //   if (ref.current && !ref.current.contains(event.target)) {
  //     alert("You clicked outside of me!");
  //   }
  // };

  // useEffect(() => {
  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // });

  const {
    input: { value, onChange }
  } = props;

  const inputChange = e => {
    const currentVal = {
      ...value,
      showTable: !value.showTable
    };
    onChange(currentVal);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        data-container="body"
        data-toggle="popover"
        data-placement="bottom"
        data-content="#popper-content"
        data-html="true"
      >
        Popover on bottom
      </button>
      <input
        type="text"
        className="form-control"
        placeholder="Add new exercise"
        value={value}
        // onChange={e => onChange(e.target.value)}
        onKeyUp={e => inputChange(e)}
        data-placement="bottom"
      />
      <div className={`scroll-table`} id="popper-content">
        <table className="table table-borderless table-hover">
          <tbody>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
            <tr>
              <td>
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
              </td>
              <td style={{ width: "100%" }}>Cell 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Popovers;
