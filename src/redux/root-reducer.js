import { combineReducers } from "redux";
//set redux form
import { reducer as formReducer } from "redux-form";
export default combineReducers({
  form: formReducer
});
