import React from "react";
import { LoginPanel } from "../../molecules";
import { Grid } from "@material-ui/core";
import { useStylePanel } from "../style";
function Panel() {
  const classes = useStylePanel();
  return (
    <Grid
      container
      classes={classes}
      item
      alignItems="center"
      justify="center"
      spacing={0}
      xs={4}
    >

      <LoginPanel />
    </Grid>
  );
}
export default Panel;
