import { combineReducers } from "redux";
import auth from "./auth.js";
import notice from "./notice.js";
import task from "./task.js";

const rootReducer = combineReducers({
  auth,
  notice,
  task,
});

export default rootReducer;
