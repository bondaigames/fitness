import React from "react";
import { Link } from "react-router-dom";

const PlanItem = React.memo(
  ({ _id, title, slug, imageURL, level, duration }) => {
    console.log("PlanItem rendering");
    return (
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="form-group">
          <Link
            className="text-decoration-none"
            to={`/plans/${slug}/${_id}/main-page`}
          >
            <div className="card">
              <img
                className="card-img-top w-100 d-block"
                alt={title}
                src={imageURL}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#29d2bf" }}>
                  {title}
                </h5>
                <h6 className="text-muted card-subtitle mb-2">
                  {level.title} | {duration} weeks
                </h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
);

export default PlanItem;
