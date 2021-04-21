import { actionTypes } from '../contants/actions-types';
const initialState = {
    products:[]
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const cartReducer = (state = [], {type, payload}) => {
    switch (type) {
        case actionTypes.ADD_TO_CART:
            return [...state, payload];
        case actionTypes.REMOVE_FROM_CART:
            return state.filter((v) => v.id !== payload.id);
        default:
            return state;
    }
}