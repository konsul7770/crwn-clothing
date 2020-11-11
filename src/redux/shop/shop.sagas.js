import {takeLatest, all, call, put} from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

import {fetchCollectionsSuccess, fetchConnectionsFailure} from "./shop.actions";

export function* fetchCollectionsAsync() {
    yield console.log("i am fired");

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch (error) {
        yield put(fetchConnectionsFailure(error.message));
    }

}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}