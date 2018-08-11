import { combineReducers } from "redux";
import TaskReducer from "./reducer_task";
import FilterReducer from "./reducer_filter";
import FilterByType from "./reducer_filterByType";

const rootReducer = combineReducers({
  task: TaskReducer,
  filterTask: FilterReducer,
  filterByType: FilterByType
});

export default rootReducer;