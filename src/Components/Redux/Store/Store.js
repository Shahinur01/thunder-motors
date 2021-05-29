import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import carReducer from "../Reducer/carReducer";

const combinedReducer = combineReducers({
    cars: carReducer
})

export const store = createStore(combinedReducer, composeWithDevTools())