import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {counterSettingsReducer} from "./counter-settings-reducer";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
    counter: counterReducer,
    counterSettings: counterSettingsReducer
})



export type AppStateType = ReturnType<typeof rootReducer>



export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppStoreType = typeof store
