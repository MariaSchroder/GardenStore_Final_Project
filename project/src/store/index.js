import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { categoriesReducer } from './reducers/categories';
import thunk from 'redux-thunk'
import { categoryProductsReducer } from './reducers/categoryProducts';
import { allProductsReducer } from './reducers/allProducts';
import { productReducer } from './reducers/product';
import { cartReducer } from './reducers/cart';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    allProducts: allProductsReducer,
    product: productReducer,
    cart: cartReducer
    
});


const persistConfig = {
    key: 'root',
    storage: storage,
   };


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, compose(applyMiddleware(thunk)));
//export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);


