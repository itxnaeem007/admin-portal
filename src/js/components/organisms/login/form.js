import React from "react";
import {Link} from 'react-router-dom';
import { Grid } from "@material-ui/core";
import { LoginForm } from "../../molecules/";
import { Label } from "../../atoms";

function LoginOrganism() {
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
          <Label value="Login To Dashboard" variant="h4" />
        </Grid>
        <LoginForm />
      </Grid>
    </Grid>
  );
}
export default LoginOrganism;
