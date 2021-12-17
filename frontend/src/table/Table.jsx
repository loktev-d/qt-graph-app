import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

export default function Table() {
  const state = useSelector((state) => state.table);

  return (
    <DataGrid
      sx={{ width: "100%" }}
      rows={state.rows}
      columns={state.columns}
      pageSize={8}
      checkboxSelection
      disableSelectionOnClick
    />
  );
}
