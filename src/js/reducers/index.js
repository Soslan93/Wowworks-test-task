import { combineReducers } from "redux";
import TaskReducer from "./reducer_task/reducer_task";
import FilterReducer from "./reducer_filter/reducer_filter";
import FilterByType from "./reducer_filter/reducer_filterByType";
import WorkTaskReducer from "./reducer_task/reducer_work_task";
import ConsiderTaskReducer from "./reducer_task/reducer_task_consider";
import MadeTaskReducer from "./reducer_task/reducer_task_made";
import RejectTaskReducer from "./reducer_task/reducer_task_rejected";
import DraftTaskReducer from "./reducer_task/reducer_task_drafts";

const rootReducer = combineReducers({
  task: TaskReducer,
  filterTask: FilterReducer,
  filterByType: FilterByType,
  workTask: WorkTaskReducer,
  madeTask: MadeTaskReducer,
  considerTask: ConsiderTaskReducer,
  rejectTask: RejectTaskReducer,
  draftTask: DraftTaskReducer
});

export default rootReducer;