import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { LoginPanelOrgasms, ConfirmFormOrgasms } from "../../organisms";
function ConfirmPassword() {
  return (
    <Grid container spacing={0}>
      <Hidden only={["xs", "sm", "md"]}>
        <LoginPanelOrgasms />
      </Hidden>
      <ConfirmFormOrgasms />
    </Grid>
  );
}
export default ConfirmPassword;
