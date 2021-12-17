import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { useDispatch } from "react-redux";

export default function Menu() {
  const dispatch = useDispatch();

  return (
    <Paper elevation={2}>
      <List>
        <ListItemButton
          onClick={() => {
            dispatch({ type: "graph/loadFile" });
          }}
        >
          <ListItemIcon>
            <FileOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Open File" />
        </ListItemButton>
      </List>
    </Paper>
  );
}
