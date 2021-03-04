import { takeEvery , all} from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes'
import { logoutSaga, checkAuthTimeoutSaga, authSaga , authCheckSaga} from './auth'
import {initIngredientsSaga} from "./burgerBuilder"
import {purchaseBurgerSaga, fetchOrdersSaga} from "./order"

export function* watchAuth() {
  yield all([
   takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
   takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
   takeEvery(actionTypes.AUTH_USER, authSaga),
   takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckSaga)
  ])
  
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga)
}

export function* watchOrder() {
  yield takeEvery(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga)
  yield takeEvery(actionTypes.FETCH_ORDER, fetchOrdersSaga)
}