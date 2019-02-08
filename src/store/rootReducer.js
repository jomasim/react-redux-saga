import { combineReducers } from "redux";

import appReducer from "../containers/app/state/reducer";
import registerReducer from "../containers/sign-up/reducer"

const rootReducer = combineReducers({
  count: appReducer,
  register :registerReducer,
});

export default rootReducer;
