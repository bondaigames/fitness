import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/plan/plan.selectors";
import "./main-plan.component.scss";
import WeekItem from "./week-item/week-item.component";

const ITEM_PER_PAGE = 28;
const WEEK_PER_PAGE = 4;
const DAY_PER_WEEK = 7;

const MainPlan = ({ collection: { title, description, days, imageURL } }) => {
  console.log("collection123", days, imageURL);

  const RenderWeekSchedule = ({ days }) => {
    const totalPage = (days.length + ITEM_PER_PAGE - 1) / ITEM_PER_PAGE;
    let schedules = [];

    for (let i = 0; i < totalPage; i++) {
      const currentPage = i;
      const offset = currentPage * ITEM_PER_PAGE;
      const tempDays = [...days];
      const currentDays = tempDays.slice(offset, offset + ITEM_PER_PAGE);

      const totalWeek = Number.parseInt(
        (currentDays.length + DAY_PER_WEEK - 1) / DAY_PER_WEEK
      );

      let weeks = [];
      for (let j = 0; j < totalWeek; j++) {
        const offset1 = j * DAY_PER_WEEK;
        const tempWeek = [...days];
        const currentWeek = tempWeek.slice(offset1, offset1 + DAY_PER_WEEK);
        const weekNumb = i * WEEK_PER_PAGE + j;
        const week = {
          days: currentWeek,
          weekNumber: weekNumb
        };
        const transformWeek = <WeekItem week={week} key={`${i}${j}`} />;
        weeks.push(
          <React.Fragment key={`${i}${j}`}>
            <h5>Week {weekNumb + 1}</h5>
            {transformWeek}
          </React.Fragment>
        );
      }
      schedules.push(
        <div
          className={`tab-pane ${i === 0 ? "active" : ""}`}
          id={`tab-${i + 1}`}
          key={`tab${i + 1}`}
        >
          {weeks}
        </div>
      );
    }
    return schedules;
  };

  const RenderWeekPagination = ({ days }) => {
    const totalPage = Number.parseInt(
      (days.length + ITEM_PER_PAGE - 1) / ITEM_PER_PAGE
    );
    let pages = [];
    for (let i = 0; i < totalPage; i++) {
      const numb = i + 1;
      pages.push(
        <li className="nav-item" key={i}>
          <a
            className={`nav-link ${i === 0 ? "active" : ""}`}
            role="tab"
            data-toggle="tab"
            href={`#tab-${numb}`}
          >
            Weeks {numb * WEEK_PER_PAGE - 3} - {numb * WEEK_PER_PAGE}
          </a>
        </li>
      );
    }
    return <ul className="nav nav-tabs nav-fill">{pages}</ul>;
  };

  return !days ? null : (
    <React.Fragment>
      {/* <div className="form-group">
        <img style={{ width: "100%" }} alt="" src={`${imageURL}`} />
      </div> */}
      <div className="form-group">
        <h4 className="text-success">Main Page</h4>
        <h5 className="text-success">{title}</h5>
        <p className="text-center text-lg-left">{description}</p>
        <div className="tab-content">
          <RenderWeekSchedule days={days} />
        </div>

        <RenderWeekPagination days={days} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  collection: selectCollections(state)
});

export default connect(mapStateToProps)(MainPlan);
