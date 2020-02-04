import React, { useEffect } from "react";
import { connect } from "react-redux";
import PlanCollection from "../../components/plan/plan-collection.container";
import { fetchCollectionsPlan } from "../../redux/plan/plan.actions";
import {
  selectIsPlanFetching,
  selectCollections
} from "../../redux/plan/plan.selectors";
import { Link } from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";

const HomePage = React.memo(
  ({ collections, fetchCollectionsPlan, isLoading }) => {
    useEffect(() => {
      fetchCollectionsPlan();
    }, [fetchCollectionsPlan]);

    return (
      <React.Fragment>
        <div
          className="jumbotron d-flex flex-column justify-content-xl-center align-items-xl-center"
          style={{ height: "50vh" }}
        >
          <h2 className="text-center">When you wanna give up</h2>
          <p className="text-center">
            Just think of the people who would love to see you fail
          </p>
          <p className="text-center">
            <Link to="/plans" className="btn btn-primary">
              Get started
            </Link>
            {/* <a className="btn btn-primary" role="button">
              Get started
            </a> */}
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {console.log("collectioncollection:", collections)}
              <Spinner data={collections} isLoading={isLoading}>
                {/* show most popular and newest
             temporary put collections to load all */}
                {/* <PlanCollection collections={collections}>
                  Most popular
                </PlanCollection> */}
                <PlanCollection collections={collections}>
                  Newest
                </PlanCollection>
              </Spinner>
              {/* <Switch>
            <Route path="/plans/:name" component={PlanPage}></Route>
          </Switch> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
);

// const mapStateToProps = ({ plans: { collection, isFetching } }) => ({
//   collection,
//   isFetching
// });

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectIsPlanFetching(state),
  collections: selectCollections(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsPlan: () => dispatch(fetchCollectionsPlan())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
