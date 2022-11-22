import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend( thunk,)
})


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof  store.dispatch

