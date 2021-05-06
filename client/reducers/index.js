import { combineReducers } from "redux";
import auth from "./auth.js";
import notice from "./notice.js";
import task from "./task.js";
import attendance from "./attendance.js";

const rootReducer = combineReducers({
  auth,
  notice,
  task,
  attendance,
});

export default rootReducer;
