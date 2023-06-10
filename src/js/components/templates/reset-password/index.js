import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { LoginPanelOrgasms, ResetFormOrgasms } from "../../organisms/";
function ResetPassword() {
  return (
    <Grid container spacing={0}>
      <Hidden only={["xs", "sm", "md"]}>
        <LoginPanelOrgasms />
      </Hidden>
      <ResetFormOrgasms />
    </Grid>
  );
}
export default ResetPassword;
