import React, { useState, useEffect } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Field, change } from "redux-form";
import UrlPattern from "url-pattern";
import _ from "lodash";
import { connect } from "react-redux";
import "./plan-side-bar.styles.scss";

const TOTAL_DAY_PER_WEEK = 7;

const PlanSideBar = ({ match, history, location, collection, dispatch }) => {
  const { imageURL, duration, days } = collection;

  const DAY_DEFAULT = 1;
  const orginalLink = `/plans/${match.params.slug}/${match.params.id}`;
  let pattern = new UrlPattern(`${orginalLink}/days(/:id)`);

  const currentDay = !_.isNil(pattern.match(location.pathname))
    ? pattern.match(location.pathname).id
    : DAY_DEFAULT;

  useEffect(() => {
    const currentWeek = Number.parseInt(
      (currentDay - 1) / TOTAL_DAY_PER_WEEK + 1
    );
    // updatedDaySelect(currentDay - 1);
    dispatch(change("PlanDetail", "week", currentWeek));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(pattern.match(location.pathname) || {}).id]);

  let totalWeek = [];
  const totalWeekNumb = days.length % 7 == 0 ? Number.parseInt(days.length / 7) : Number.parseInt(days.length / 7 + 1);
  console.log("------------- day length --------------" + days.length);
  for (let i = 1; i <= totalWeekNumb; i++) {
    totalWeek.push(
      <option value={i} key={i}>
        Week {i} of {duration}
      </option>
    );
  }

  const handleWeekChange = e => {
    const currentDayByWeek = Number.parseInt(
      e.target.value * TOTAL_DAY_PER_WEEK - TOTAL_DAY_PER_WEEK
    );
    updatedDaySelect(currentDayByWeek);
  };

  const updatedDaySelect = dayNumber => {
    //Day number start to 0 but on url should be from 1
    const workOutPath = `${orginalLink}/days/${dayNumber + 1}`;

    history.push({
      pathname: workOutPath
    });
  };

  const RenderPlanWeek = () => {
    //(Day - 1)/ per week + 1
    const currentWeek = Number.parseInt(
      (currentDay - 1) / TOTAL_DAY_PER_WEEK + 1
    );
    const startDay = Number.parseInt(
      currentWeek * TOTAL_DAY_PER_WEEK - TOTAL_DAY_PER_WEEK
    );
    
    const endDay = Number.parseInt(currentWeek * TOTAL_DAY_PER_WEEK);
    //const endDay = days.length;

    console.log("----------- days.length -------------" + days.length);
    const planDays = [];
    for (let i = startDay; i < endDay; i++) {
      if (i > days.length - 1) break;
      console.log("----------- i -------------" + i);
      console.log("----------- days[i] -------------" + JSON.stringify(days[i]) );
      
      const { muscle_group } = days[i];
      if (i === Number.parseInt(currentDay - 1)) {
        planDays.push(
          <li
            className="list-group-item mb-1"
            style={{ backgroundColor: "rgb(0,0,0)", color: "rgb(255,255,255)" }}
            key={i}
          >
            <span className="arrow-right"></span>
            <h5>{muscle_group}</h5>
            <h6>Day {i + 1}</h6>
          </li>
        );
      } else {
        planDays.push(
          <li className="list-group-item" key={i}>
            <Link
              to={`${orginalLink}/days/${i + 1}#workout`}
              className="text-decoration-none"
              onClick={() => updatedDaySelect(i)}
            >
              <h5>{muscle_group}</h5>
              <h6 className="text-muted mb-2">Day {i + 1}</h6>
            </Link>
          </li>
        );
      }
    }

    return <div>{planDays}</div>;
  };

  return (
    <React.Fragment>
      <div className="form-group">
        <img className="w-100" alt="logo" src={imageURL} />
      </div>
      <div className="form-group"></div>
      <div className="form-group">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink
              to={`${orginalLink}/main-page`}
              exact
              className="nav-link"
              activeClassName="active"
            >
              Main Page
            </NavLink>
          </li>
          <li className="nav-item">
            <div className="form-group">
              <NavLink
                // to={planPaths.workout}
                to={`${orginalLink}/days/${currentDay}`}
                className="nav-link"
                activeClassName="active"
              >
                Work Schedule
              </NavLink>
            </div>
            {/* {location.pathname !== planPaths.workout ? ( */}
            {!(pattern.match(location.pathname) || {}).id ? (
              ""
            ) : (
              <React.Fragment>
                <div className="form-group">
                  <Field
                    name="week"
                    component="select"
                    className="form-control"
                    onChange={handleWeekChange}
                  >
                    {totalWeek}
                  </Field>
                </div>

                <div className="form-group">
                  <ul className="list-group" id="navbar-example2">
                    <RenderPlanWeek />
                  </ul>
                </div>
              </React.Fragment>
            )}
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default connect()(withRouter(PlanSideBar));
