import {combineReducers, createStore } from "redux";
import appReducer from "./app-reducer";


let reducers = combineReducers({appPage: appReducer});

export let store = createStore(reducers);


window.store = store;