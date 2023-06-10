import React from "react";
import { Grid } from "@material-ui/core";
import { ConfirmPasswordForm } from "../../molecules/";
import { Label } from "../../atoms";

function ConfirmOrgasms() {
  return (
    <Grid
      container
      alignItems="center"
      item
      justify="center"
      spacing={1}
      xs={8}
    >
      <Grid item container xs={12} md={9} alignItems="center" justify="center">
        <Grid item md={12}>
          <Label value="Confirm Password" variant="h4" />
        </Grid>
        <ConfirmPasswordForm />
      </Grid>
    </Grid>
  );
}
export default ConfirmOrgasms;
