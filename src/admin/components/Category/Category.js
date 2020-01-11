import React from "react";

const CategoryList = props => {
  return (
    <div className="table-responsive table-bordered">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center" style={{ width: "5%" }}>
              #
            </th>
            <th style={{ width: "65%" }}>Category Name</th>
            <th style={{ width: "30%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td>1</td>
            <td>
              <a className="mr-5">Link</a>
              <a>Link</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>Cell 4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
