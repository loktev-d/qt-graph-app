import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";

import { updateSelected } from "./tableSlice";

export default function Table() {
  const state = useSelector((state) => state.table);
  const dispatch = useDispatch();

  return (
    <DataGrid
      sx={{ width: "100%" }}
      rows={state.rows}
      columns={state.columns}
      pageSize={8}
      checkboxSelection
      disableSelectionOnClick
      editMode="row"
      onEditRowsModelChange={(model) => {
        dispatch({
          type: "table/editItem",
          payload: model,
        });
      }}
      onSelectionModelChange={(model) => {
        dispatch(updateSelected(model));
      }}
    />
  );
}
