import { takeEvery } from 'redux-saga/effects';
import { logoutSaga, authCheckTimeoutSaga } from './auth';

import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
   yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
   yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, authCheckTimeoutSaga);
}