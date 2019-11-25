import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";
import jobs from "./jobsReducer";

const rootReducer = combineReducers({
  apiCallsInProgress,
  jobs,
});

export default rootReducer;
