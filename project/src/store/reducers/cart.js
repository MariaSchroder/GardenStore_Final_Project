const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const DELETE_CARD = 'DELETE_CARD';

export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const deleteCard = payload => ({ type: DELETE_CARD, payload });
export const clearCart = () => ({ type: CLEAR_CART });


const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id);
    if (productInState) {
        productInState.count++
        return [...state]
    } else {
        return [...state, {
            ...payload,
            count: 1
        }]
    }
}


export const cartReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_CART) {
        return checkProduct(state, action.payload)
    }

    else if (action.type === CLEAR_CART) {
        return defaultState
    }

    else if (action.type === DELETE_CARD) {
        return state.filter(el => el.id !== action.payload)
      }

    else {
        return state
    }
}