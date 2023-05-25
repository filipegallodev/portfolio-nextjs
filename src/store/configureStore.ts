import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "./reducers/theme";

const reducer = combineReducers({ theme });
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
