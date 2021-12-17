import { createSlice } from "@reduxjs/toolkit";

import { addSpacesToCamelCase, lowerFirstLetter } from "../misc";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    columns: [],
    rows: [],
  },
  reducers: {
    loadRows: (state, action) => {
      state.columns = Object.keys(action.payload[0]).map((key) => ({
        field: lowerFirstLetter(key),
        headerName: addSpacesToCamelCase(key),
      }));

      state.rows = action.payload.map((item) => {
        let entries = Object.entries(item).map(([key, value]) => [
          lowerFirstLetter(key),
          value,
        ]);

        return Object.fromEntries(entries);
      });
    },
    updateRows: (state, action) => {
      state.rows = action.payload.map((item) => {
        let entries = Object.entries(item).map(([key, value]) => [
          lowerFirstLetter(key),
          value,
        ]);

        return Object.fromEntries(entries);
      });
    },
  },
});

export const { loadRows, updateRow } = tableSlice.actions;
export default tableSlice.reducer;
