import { call, put, takeLatest, all } from "redux-saga/effects";

import api from "../backend-api";
import { loadRows } from "../table/tableSlice";

function* loadFile() {
  let res = yield call(api.loadFile);
  yield put(loadRows(res.Items.Item));
}

function* watchLoadFile() {
  yield takeLatest("table/requestLoadFile", loadFile);
}

export default function* rootSaga() {
  yield all([watchLoadFile()]);
}
