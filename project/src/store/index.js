import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './reducers/categories';
import thunk from 'redux-thunk'
import { categoryProductsReducer } from './reducers/categoryProducts';
import { allProductsReducer } from './reducers/allProducts';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    allProducts: allProductsReducer

});


export const store = createStore(rootReducer, applyMiddleware(thunk));