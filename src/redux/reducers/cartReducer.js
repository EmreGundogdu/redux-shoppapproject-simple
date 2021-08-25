import * as actionTypes from '../actions/actionTypes';
import initalState from '../reducers/initialState';

export default function cartReducer(state = initalState.cart, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(x => x.product.id === action.payload.product.id);
            if (addedItem) {
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 })
                    }
                    return cartItem;
                })
            }
        default:
            return state;
    }
}