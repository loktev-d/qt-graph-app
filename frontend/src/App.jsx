import { Container, Grid } from "@mui/material";

import Menu from "./menu/Menu";
import Graph from "./graph/Graph";

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ mt: 2, height: "100vh" }}>
      <Grid container spacing={2} sx={{ pb: 2, height: "100%" }}>
        <Grid item xs={3}>
          <Menu />
        </Grid>
        <Grid item xs={9}>
          <Graph />
        </Grid>
      </Grid>
    </Container>
  );
}
