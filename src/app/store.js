import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import counterSlice from "../features/counter/counterSlice";

const store = configureStore({
    reducer:{
        counter: counterSlice
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) //Defaut Middleware
    middleware: [logger, thunk] //if Multiple Middlewares use array
});

export default store;