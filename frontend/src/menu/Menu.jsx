import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Paper,
} from "@mui/material";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import SaveAsIcon from "@mui/icons-material/SaveAs";

export default function Menu() {
  return (
    <Paper elevation={2}>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <FileOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Open File" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SaveAsIcon />
          </ListItemIcon>
          <ListItemText primary="Save As..." />
        </ListItemButton>
      </List>
    </Paper>
  );
}
