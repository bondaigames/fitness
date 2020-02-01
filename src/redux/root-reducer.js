import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import planReducer from "./plan/plan.reducer";

//set redux form
import { reducer as formReducer } from "redux-form";

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  plans: planReducer,
  form: formReducer
});

export default persistReducer(persistConfig, rootReducer);
