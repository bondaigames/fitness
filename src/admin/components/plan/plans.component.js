import React from "react";

const Plans = () => (
  <div>
    <button className="btn btn-primary" type="button">
      Add new plan
    </button>

    <table className="table table-bordered">
      <thead>
        <tr>
          <th style={{ width: "32px" }}>
            <input
              type="checkbox"
              data-toggle="tooltip"
              data-placement="right"
              title="Select all"
            />
          </th>
          <th>Plans</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Cell 2</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Cell 2</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Plans;
