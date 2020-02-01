import { createSelector } from "reselect";

const selectPlan = state => state.plans;

export const selectCollections = createSelector(
  [selectPlan],
  plans => plans.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections
      ? collections.find(item => item.id === collectionUrlParam)
      : null
  );

export const selectIsPlanFetching = createSelector(
  [selectPlan],
  plans => plans.isFetching
);
