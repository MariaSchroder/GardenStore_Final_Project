const defaultState = [];
let firstState = [];

const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_ALL_PRODUCTS = 'SORT_ALL_PRODUCTS';
const SEARCH_ALL_PRODUCTS_PRICE = 'SEARCH_ALL_PRODUCTS_PRICE';


export const loadAllProducts = payload => ({ type: LOAD_ALL_PRODUCTS, payload });
export const sortAllProducts = payload => ({ type: SORT_ALL_PRODUCTS, payload });
export const searchAllProductsPrice = payload => ({ type: SEARCH_ALL_PRODUCTS_PRICE, payload });



export const allProductsReducer = (state = defaultState, action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        firstState = action.payload;
        return firstState
    }

    else if (action.type === SORT_ALL_PRODUCTS) {
        if (action.payload === 'default') {
            return firstState
        } 

        else if (typeof state[0][action.payload] === 'string') {
            return [...state]
                   .sort((a, b) => a[action.payload]
                   .localeCompare(b[action.payload]))
          } 

        else {
            return [...state]
                   .sort((a, b) => a[action.payload] - b[action.payload])
        }
    }

    else if (action.type === SEARCH_ALL_PRODUCTS_PRICE) {
        const { min_value, max_value } = action.payload;
        return state.map(el => {
            if (el.price >= min_value && el.price <= max_value) {
                el.hide = false
            } else {
                el.hide = true
            }
            return el
        })
    }    
    
    else {
        return state
    }
}


