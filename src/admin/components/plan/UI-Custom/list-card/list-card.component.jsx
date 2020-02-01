import React from "react";
import { Field, FieldArray, formValueSelector } from "redux-form";
import CustomDropdown from "../../../../../UI/CustomDropdown/CustomDropdown.component";
import ListGroup from "../list-group/list-group.component";
import { connect } from "react-redux";

const ListCard = ({
  fields,
  meta: { error, submitFailed },
  data,
  values,
  handleSelectedRow,
  handleLoadDataByTagName,
  handleRemoveExercise
}) => {
  const addMoreField = () => {
    fields.push({});
    handleLoadDataByTagName(fields.name, fields.length);
  };
  return (
    <React.Fragment>
      <div className="form-group">
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => addMoreField()}
        >
          Add day
        </button>
        {submitFailed && error && <span>{error}</span>}
      </div>
      {fields.map((day, index) => {
        return (
          <div className="card mb-2" key={day + index}>
            <div className="card-body">
              <button
                className="btn btn-danger float-right"
                type="button"
                onClick={() => fields.remove(index)}
              >
                <svg
                  className="octicon octicon-trashcan"
                  viewBox="0 0 12 16"
                  version="1.1"
                  width="12"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    fill="white"
                    d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"
                  ></path>
                </svg>
              </button>
              <h4 className="card-title mt-1">Day #{index + 1}</h4>
              <div className="form-group">
                <Field
                  name={`${day}.muscleGroup`}
                  type="text"
                  component="input"
                  className="form-control"
                  placeholder="Muscle group"
                />
              </div>
              <div className="form-group">
                {console.log("data[index]", data[index])}
                <CustomDropdown
                  data={data[index]}
                  extraParams={{ tagName: fields.name, idx: index }}
                  handleSelectedRow={handleSelectedRow}
                />
                {/* <Field
                name="myField"
                component={CustomDropdown}
                data={data}
                handleSelectedRow={handleSelectedRow}
              /> */}
                {console.log("valuesvaluesvalues: ", `${day}.exercise`)}
                <FieldArray
                  name={`${day}.notes`}
                  component={ListGroup}
                  items={values[index].exercises}
                  handleRemoveExercise={handleRemoveExercise}
                />
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
const selector = formValueSelector("PlanForm");
export default connect(state => ({
  values: selector(state, "days")
}))(ListCard);
