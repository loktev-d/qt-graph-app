import { call, put, takeLatest, all, select } from "redux-saga/effects";

import api from "../backend-api";
import { loadRows, updateRows } from "../table/tableSlice";
import { upperFirstLetter, upperFirstLetterOfObjKeys } from "../misc";

function* loadFile() {
  let res = yield call(api.loadFile);

  if (!res) return;

  yield put(loadRows(res.Items.Item));
}

function* watchLoadFile() {
  yield takeLatest("table/loadFile", loadFile);
}

function* addTableItem() {
  let columns = yield select((state) => state.table.columns);
  let rows = yield select((state) => state.table.rows);

  let newRow = Object.fromEntries(
    columns.map((column) => [
      upperFirstLetter(column.field),
      column.field === "id"
        ? (Math.max(...rows.map((row) => parseInt(row.id))) + 1).toString()
        : null,
    ])
  );
  let res = yield call(api.addTableItem, newRow);

  yield put(updateRows(res.Items.Item));
}

function* watchAddTableItem() {
  yield takeLatest("table/addItem", addTableItem);
}

function* editTableItem(action) {
  if (!Object.entries(action.payload).length) return;

  let res = yield call(
    api.editTableItem,
    upperFirstLetterOfObjKeys(convertRowModelToDto(action.payload))
  );
  yield put(updateRows(res.Items.Item));
}

function convertRowModelToDto(rowModel) {
  let id = ["id", Object.keys(rowModel)[0]];
  let dto = Object.entries(Object.entries(rowModel)[0][1]).map(
    ([key, value]) => [key, value.value]
  );
  dto.push(id);

  return Object.fromEntries(dto);
}

function* watchEditTableItem() {
  yield takeLatest("table/editItem", editTableItem);
}

function* deleteTableItem(action) {
  let res = yield call(api.deleteTableItems, action.payload);
  yield put(updateRows(res.Items.Item));
}

function* watchDeleteTableItem() {
  yield takeLatest("table/deleteItems", deleteTableItem);
}

export default function* rootSaga() {
  yield all([
    watchLoadFile(),
    watchAddTableItem(),
    watchEditTableItem(),
    watchDeleteTableItem(),
  ]);
}
