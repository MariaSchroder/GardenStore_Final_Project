import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './reducers/categories';
import thunk from 'redux-thunk'
import { categoryProductsReducer } from './reducers/categoryProducts';
import { allProductsReducer } from './reducers/allProducts';
import { productReducer } from './reducers/product';
import { cartReducer } from './reducers/cart';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    allProducts: allProductsReducer,
    product: productReducer,
    cart: cartReducer

});


export const store = createStore(rootReducer, applyMiddleware(thunk));