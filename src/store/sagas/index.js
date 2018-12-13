import { takeEvery } from 'redux-saga/effects';
import { logoutSaga, authCheckTimeoutSaga } from './auth';
import { initIngredientsSaga } from './burgerBuilder'
import { fetchOrdersSaga, purchaseBurgerSaga } from './order';

import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
   yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
   yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeoutSaga);
}

export function* watchIngredients() {
   yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* watchOrder() {
   yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
   yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
}