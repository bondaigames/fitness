import { connect } from "react-redux";
import { compose } from "redux";
import PlanDetail from "./plan-detail.component";
import {
  selectIsPlanFetching,
  selectCollections
} from "../../../redux/plan/plan.selectors";
import { fetchPlanById } from "../../../redux/plan/plan.actions";

// const mapStateToProps = createStructuredSelector({
//   isLoading: selectIsPlanFetching
// });

const mapStateToProps = (state, ownProps) => ({
  isLoading: selectIsPlanFetching(state),
  collection: selectCollections(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPlanById: id => dispatch(fetchPlanById(id))
});

const PlanDetailContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
  //   WithSpinner
)(PlanDetail);

export default PlanDetailContainer;
