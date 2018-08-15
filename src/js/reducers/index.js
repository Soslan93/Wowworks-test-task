import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import TaskReducer from "./reducer_main/reducer_task";
import OtherMainReducer from "./reducer_main/reducer_other_main";
import FilterReducer from "./reducer_filter/reducer_filter";
import FilterByType from "./reducer_filter/reducer_filterByType";


const rootReducer = combineReducers({
  routing: routerReducer,
  task: TaskReducer,
  otherMain: OtherMainReducer,
  filterTask: FilterReducer,
  filterByType: FilterByType
});

export default rootReducer;