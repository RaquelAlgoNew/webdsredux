import { takeEvery, call, put } from "redux-saga/effects";
import { dataLoaded } from "../actions";
import { DS_DATA_REQUESTED, DS } from "../constants/actionTypes";

export default function* watcherSaga() {
  yield takeEvery(DS_DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put(dataLoaded(payload, DS));
  } catch (e) {
    yield put({type: "API_ERRORED", payload: e});
  }
}

function getData() {
    return fetch("http://192.168.1.153:3001/ds")
    .then(response => response.json());
  }