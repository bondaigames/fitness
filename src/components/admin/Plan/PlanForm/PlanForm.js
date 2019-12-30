import React, { useState } from "react";
import Spinner from "../../../UI/Spinner/Spinner";
import Dropdown from "../../../UI/Dropdown/Dropdown";
import Alert from "../../../UI/Alert/Alert";
// {
//       title: "Shortcut to Size",
//       level: "Beginner",
//       workOutLength: 45,
//       duration: "12 weeks",
//       link:
//         "https://www.bodybuilding.com/images/2017/october/shortcut-to-size-logo-header-377x212.jpg"
//     }

const PlanForm = React.memo(props => {
  const { isLoading, data, error, onAddPlanHandler } = props;
  const [state, setState] = useState({
    title: "",
    length: 0,
    duration: 0,
    link: "",
    level: [
      {
        id: 0,
        title: "Beginner",
        selected: true,
        key: "level"
      },
      {
        id: 1,
        title: "Intermediate",
        selected: false,
        key: "level"
      },
      {
        id: 2,
        title: "Advanced",
        selected: false,
        key: "level"
      }
    ]
  });

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  //Drop down handle
  const toggleSelected = (id, key) => {
    console.log("id, key", id, key);
    let temp = state[key];
    console.log("temp", temp);
    temp.forEach(item => (item.selected = false));
    temp[id].selected = true;
    setState({
      ...state,
      [key]: temp
    });
    // const currentLevel = state.level.find(item => item.selected === true);
    // this.handleSetPlaybackRate(currentSpeed.rate);
  };

  const addPlanHandler = evt => {
    evt.preventDefault();
    onAddPlanHandler(state);
    setState({});
  };

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">Add new plan</div>
        <div className="card-body">
          <Alert
            message={data ? "Add new plan successfuly" : ""}
            error={error}
          />
          <Spinner loading={isLoading}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Level:</label>
              <Dropdown
                title={state.level[0].title}
                list={state.level}
                toggleSelected={toggleSelected}
              ></Dropdown>
            </div>
            <div className="form-group">
              <label>Length:</label>
              <input
                type="number"
                className="form-control"
                min="1"
                max="60"
                placeholder="Please enter minutes"
                name="length"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Duration (weeks):</label>
              <input
                type="number"
                className="form-control"
                min="1"
                max="12"
                placeholder="Please enter weeks"
                name="duration"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Link Image:</label>
              <input
                type="text"
                name="link"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button
              className="btn btn-secondary border rounded"
              type="button"
              onClick={addPlanHandler}
            >
              Submit
            </button>
          </Spinner>
        </div>
      </div>
    </React.Fragment>
  );
});

export default PlanForm;
