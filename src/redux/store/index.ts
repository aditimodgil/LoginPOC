import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import authReducer from "../reducers/authReducer";


const rootReducer = combineReducers({
  auth: authReducer,
  
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export type RootState = ReturnType<typeof rootReducer>
export default store;
