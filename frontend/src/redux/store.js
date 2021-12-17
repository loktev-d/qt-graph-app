import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import graphReducer from "../graph/graphSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    graph: graphReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
