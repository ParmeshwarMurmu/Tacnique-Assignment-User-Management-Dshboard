import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { reducer as AllUserReducer } from '../AllUserReducer/reducer'
import { reducer as AddUserReducer } from '../AddUserReducer/reducer'
import { reducer as EditUserReducer } from '../EditUserReducer/reducer'
import { thunk } from 'redux-thunk'


const rootReducer = combineReducers({
    AllUserReducer,
    AddUserReducer,
    EditUserReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))