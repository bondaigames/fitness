import React from "react";
import { Field } from "redux-form";
import { connect } from "react-redux";

const ListGroupItem = props => {
  const { title, image_1, image_2, idx, note } = props;

  // const handleRemoveItem = index => {
  //   // const filter = items.filter((item, idx) => idx !== index);

  //   // console.log("filterfilterfilter: ", filter);
  //   // dispatch(change("PlanForm", exerciseField, filter));
  // };

  return (
    <div className="d-flex justify-content-start align-items-center pb-3">
      <span className="pr-3">{idx + 1}.</span>
      <div className="pr-2">
        <img
          src={image_1} //https://via.placeholder.com/40
          className="rounded"
          style={{ width: "60px", height: "60px" }}
          alt="img1"
          loading="lazy"
        />
      </div>
      <div className="d-sm-none d-md-inline pr-2">
        <img
          src={image_2}
          className="d-none d-md-block rounded"
          alt="img2"
          style={{ width: "60px", height: "60px" }}
          loading="lazy"
        />
      </div>
      <div
        className="d-flex flex-column flex-wrap justify-content-xl-start align-items-xl-start pr-2"
        style={{ width: "100%" }}
      >
        <span>{title}</span>
        <Field
          name={`${note}.info`}
          component="input"
          type="text"
          placeholder="Please fill description here"
          className="form-control pb-1"
        />
        <Field
          name={`${note}.definition`}
          component="input"
          type="text"
          placeholder="E.g: 3 sets, 3-5 Reps (Dropset on final set)"
          className="form-control"
        />

        {/* <FieldArray name="notes" component={renderNotes} /> */}

        {/* {fields.map((note, index) => (
          <Field
            name={note}
            component="input"
            type="text"
            placeholder="E.g: 3 sets, 3-5 Reps (Dropset on final set)"
            className="form-control"
          />
        ))} */}
      </div>
      <div className="pr-3 d-flex flex-row flex-wrap justify-content-xl-center align-items-xl-center">
        <span className="pb-1">
          <button className="btn btn-secondary btn-sm" type="button">
            <svg
              className="octicon octicon-chevron-up"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                fill="white"
                d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z"
              ></path>
            </svg>
          </button>
        </span>
        <span>
          <button className="btn btn-secondary btn-sm" type="button">
            <svg
              className="octicon octicon-chevron-down"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                fill="white"
                d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"
              ></path>
            </svg>
          </button>
        </span>
      </div>
      <div>
        <button
          className="btn btn-danger btn-sm"
          type="button"
          // onClick={
          //   () => handleRemoveItem(idx)
          //   // dispatch(change("PlanForm", exerciseField, items.remove(idx)))
          // }
        >
          <svg
            className="octicon octicon-x"
            viewBox="0 0 12 16"
            version="1.1"
            width="12"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              fill="white"
              d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default connect()(ListGroupItem);
