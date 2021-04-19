import { combineReducers } from "redux";
import auth from "./auth.js";
import notice from "./notice.js";

const rootReducer = combineReducers({
  auth,
  notice,
});

export default rootReducer;
