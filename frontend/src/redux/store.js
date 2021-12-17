import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import tableReducer from "../table/tableSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
