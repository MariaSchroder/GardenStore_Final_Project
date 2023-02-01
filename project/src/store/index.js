import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './reducers/categories';
import thunk from 'redux-thunk'
import { categoryProductsReducer } from './reducers/categoryProducts';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer

});


export const store = createStore(rootReducer, applyMiddleware(thunk));