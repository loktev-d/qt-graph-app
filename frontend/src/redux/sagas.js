import { call, put, takeLatest, all, select } from "redux-saga/effects";

import api from "../backend-api";
import renderGraph from "../graph-renderer";
import { loadData } from "../graph/graphSlice";

function* loadFile() {
  let res = yield call(api.loadFile);

  if (!res) return;

  yield put(loadData(res.Edges.Edge));
  let edges = yield select((state) => state.graph.edges);
  yield call(renderGraph, edges);
}

function* watchLoadFile() {
  yield takeLatest("graph/loadFile", loadFile);
}
export default function* rootSaga() {
  yield all([watchLoadFile()]);
}
