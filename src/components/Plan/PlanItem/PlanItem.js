import React from "react";

const planItem = props => {
  const { item } = props;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="form-group">
        <a className="text-decoration-none" href="#">
          <div className="card">
            <img
              className="card-img-top w-100 d-block"
              src="https://www.bodybuilding.com/images/2017/october/shortcut-to-size-logo-header-377x212.jpg"
            />
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#29d2bf" }}>
                {item.title}
              </h5>
              <h6 className="text-muted card-subtitle mb-2">
                {item.level} | {item.duration} weeks
              </h6>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default planItem;
