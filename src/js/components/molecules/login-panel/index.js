import React from "react";
import { Grid } from "@material-ui/core";
import { useStyle } from "./style";
function LoginPanel() {
  const classes = useStyle();
  return (
    <Grid item container alignItems="center" justify="center">
      {/* <img className={classes.logo} src="/img/white-logo.png" alt="" /> */}
      <p style={{color : 'white' , fontSize : '18px' , fontWeight : 'bolder'}}>Black Americas Emergency</p>

    </Grid>
  );
}
export default LoginPanel;
