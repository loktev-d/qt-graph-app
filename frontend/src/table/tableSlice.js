import { createSlice } from "@reduxjs/toolkit";

import {
  addSpacesToCamelCase,
  lowerFirstLetter,
  lowerFirstLetterOfObjKeys,
} from "../misc";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    columns: [],
    rows: [],
    selected: [],
  },
  reducers: {
    loadRows: (state, action) => {
      state.columns = Object.keys(action.payload[0]).map((key) => ({
        field: lowerFirstLetter(key),
        headerName: addSpacesToCamelCase(key),
        editable: key !== "Id",
      }));

      state.rows = action.payload.map((item) => {
        return lowerFirstLetterOfObjKeys(item);
      });
    },
    updateRows: (state, action) => {
      state.rows = action.payload.map((item) => {
        return lowerFirstLetterOfObjKeys(item);
      });
    },
    updateSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { loadRows, updateRows, updateSelected } = tableSlice.actions;
export default tableSlice.reducer;
