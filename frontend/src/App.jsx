import { Container, Grid } from "@mui/material";

import Menu from "./menu/Menu";
import Table from "./table/Table";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Menu />
        </Grid>
        <Grid item xs={8}>
          <Table />
        </Grid>
      </Grid>
    </Container>
  );
}
