import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todosReducers} from "./todosReducers";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todosReducers
})


export type RootState = ReturnType<typeof rootReducer>