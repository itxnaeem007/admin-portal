import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { LoginPanelOrgasms, LoginFormOrgasms } from "../../organisms/";
function Login() {
  return (
    <Grid container spacing={0}>
      <Hidden only={["xs", "sm", "md"]}>
        <LoginPanelOrgasms />
      </Hidden>
      <LoginFormOrgasms />
    </Grid>
  );
}
export default Login;
