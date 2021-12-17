import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useDispatch, useSelector } from "react-redux";

import { saveTableData } from "../backend-api";

export default function Menu() {
  const dispatch = useDispatch();
  const table = useSelector((state) => state.table);

  return (
    <Paper elevation={2}>
      <List>
        <ListItemButton
          onClick={() => {
            dispatch({ type: "table/loadFile" });
          }}
        >
          <ListItemIcon>
            <FileOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Open File" />
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            saveTableData();
          }}
        >
          <ListItemIcon>
            <SaveAsIcon />
          </ListItemIcon>
          <ListItemText primary="Save As..." />
        </ListItemButton>

        {table.columns.length ? (
          <ListItemButton
            onClick={() => {
              dispatch({ type: "table/addItem" });
            }}
          >
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Add Row" />
          </ListItemButton>
        ) : null}

        {table.rows.length ? (
          <ListItemButton
            onClick={() => {
              dispatch({ type: "table/deleteItems", payload: table.selected });
            }}
          >
            <ListItemIcon>
              <RemoveCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Remove Rows" />
          </ListItemButton>
        ) : null}
      </List>
    </Paper>
  );
}
