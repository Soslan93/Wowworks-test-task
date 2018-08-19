import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import MenuItemReducer from "./reducer_main/reducer_menu_item";
import TaskReducer from "./reducer_main/reducer_task";
import OtherMainReducer from "./reducer_main/reducer_other_main";
import FilterReducer from "./reducer_filter/reducer_filter";
import FilterPersonal from "./reducer_filter/reducer_filterPersonal";
import FilterNight from "./reducer_filter/reducer_filterNight";
import FilterUrgent from "./reducer_filter/reducer_filterUrgent";

const rootReducer = combineReducers({
  routing: routerReducer,
  task: TaskReducer,
  otherMain: OtherMainReducer,
  filterTask: FilterReducer,
  filterPersonal: FilterPersonal,
  filterNight: FilterNight,
  filterUrgent: FilterUrgent,
  item: MenuItemReducer
});

export default rootReducer;