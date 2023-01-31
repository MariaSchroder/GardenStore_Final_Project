import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './reducers/categories';
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    categories: categoriesReducer

});


export const store = createStore(rootReducer, applyMiddleware(thunk));