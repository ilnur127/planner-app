import { createStore, combineReducers } from "redux";
import objectReducer from "./reducers/objectReducer";

const rootReducer = combineReducers({
  objects: objectReducer,
});

const store = createStore(rootReducer);

export default store;
