import { createSlice } from "@reduxjs/toolkit";

export const graphSlice = createSlice({
  name: "graph",
  initialState: {
    edges: [],
  },
  reducers: {
    loadData: (state, action) => {
      state.edges = action.payload;
    },
  },
});

export const { loadData } = graphSlice.actions;
export default graphSlice.reducer;
