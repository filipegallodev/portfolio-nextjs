import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "./reducers/theme";
import projects from "./reducers/projects";

const reducer = combineReducers({ theme, projects });
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
