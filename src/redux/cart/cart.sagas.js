import {all, call, takeLatest, put} from 'redux-saga/effects';
import UserActionTypes from "../user/user.types";
import {clearCart} from "./cart.actions";

export function* clearOnSignOut() {
    yield put(clearCart());
}
export function* clearCartStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearOnSignOut)
}
export function* cartSagas() {
    yield all([call(clearCartStart)])
}