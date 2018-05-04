import { combineReducers } from "redux";
import registerUserReducer from "reducers/registerUserReducer";
import logInUserReducer from "reducers/logInUserReducer";
import notificationReducer from "reducers/notificationReducer";
import authorizationDataReducer from "reducers/authorizationDataReducer";

const rootReducer = combineReducers({
  registerUserReducer,
  logInUserReducer,
  notificationReducer,
  authorizationDataReducer
});

export default rootReducer;
