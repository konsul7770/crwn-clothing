import {CartActionTypes} from "./cart.types";

export const toggleCartsHidden = () => ({
    type: CartActionTypes.TOGGLE_CARTS_HIDDEN
})
export const addItem = item =>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})