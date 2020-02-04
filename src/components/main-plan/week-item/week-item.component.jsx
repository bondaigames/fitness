import React from "react";
import { Link } from "react-router-dom";
import "./week-item.scss";

const WeekItem = ({ week: { days, weekNumber } }) => {
  console.log("week item days: ", days);
  const transformDays = days.map((day, id) => {
    const currentDayNumber = weekNumber * 7 + (id + 1);
    return (
      <Link to={`days/${currentDayNumber}`} className="card day" key={id}>
        {/* <div > */}
        <div className="card-body">
          <h6 className="text-center card-title">Day {currentDayNumber}</h6>
          <p className="text-center card-text" style={{ fontSize: "14px" }}>
            {day.muscle_group}
          </p>
          {/* </div> */}
        </div>
      </Link>
    );
  });

  return <div className="card-group pb-2">{transformDays}</div>;
};

export default WeekItem;
