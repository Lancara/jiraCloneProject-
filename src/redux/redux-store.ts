import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import mainPageReducer from "./mainPage-reducer";

const rootReducers = combineReducers({
  mainPage: mainPageReducer,
});

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;
