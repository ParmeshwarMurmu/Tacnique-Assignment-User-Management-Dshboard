import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { reducer as AllUserReducer } from '../AllUserReducer/reducer'
import { reducer as AddUserReducer } from '../AddUserReducer/reducer'
import { thunk } from 'redux-thunk'


const rootReducer = combineReducers({
    AllUserReducer,
    AddUserReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))