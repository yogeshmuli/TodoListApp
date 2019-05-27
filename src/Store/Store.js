import {createStore,combineReducers,applyMiddleware} from "redux";
import {Reducer}from "../Reducers/Reducers"
import createSagaMiddleware from "redux-saga";
import { watchAction } from "../Saga/Saga";

const sagaMiddleWare=createSagaMiddleware()

export const Store=createStore(Reducer,applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(watchAction)

