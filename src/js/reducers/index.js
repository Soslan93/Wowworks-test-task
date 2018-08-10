import { combineReducers } from "redux";
import TaskReducer from "./reducer_task";

const rootReducer = combineReducers({
  task: TaskReducer
});

export default rootReducer;