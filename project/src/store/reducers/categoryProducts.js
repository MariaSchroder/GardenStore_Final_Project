const defaultState = [];
let firstState = [];


const LOAD_CATEGORY_PRODUCTS = 'LOAD_CATEGORY_PRODUCTS';
const SORT_CATEGORY_PRODUCTS = 'SORT_CATEGORY_PRODUCTS';
const SEARCH_CATEGORY_PRODUCTS_PRICE = 'SEARCH_CATEGORY_PRODUCTS_PRICE';


export const loadCategoryProducts = payload => ({ type: LOAD_CATEGORY_PRODUCTS, payload });
export const sortCategoryProducts = payload => ({ type: SORT_CATEGORY_PRODUCTS, payload });
export const searchCategoryProductsPrice = payload => ({ type: SEARCH_CATEGORY_PRODUCTS_PRICE, payload });



export const categoryProductsReducer = (state = defaultState, action) => {
    
    if (action.type === LOAD_CATEGORY_PRODUCTS) {
            firstState = action.payload;
            return firstState
    } 

    else if (action.type === SORT_CATEGORY_PRODUCTS) {
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

    else if (action.type === SEARCH_CATEGORY_PRODUCTS_PRICE) {
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

