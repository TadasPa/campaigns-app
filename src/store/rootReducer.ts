import { combineReducers } from "redux";
import campaignsReducer from "./campaigns/reducer";
import usersReducer from "./users/reducer";

const rootReducer = combineReducers({
  campaigns: campaignsReducer,
  users: usersReducer,
});

export default rootReducer;
