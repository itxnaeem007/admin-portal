import React from "react";
import { Label, Input, Button } from "../../atoms";
import { Grid } from "@material-ui/core";
import { useStyle } from "../style";
import Prototype from "prop-types";

function LoginForm(props) {
  const { register, error, loading } = props;
  const classes = useStyle();
  return (
    <>
      <Grid classes={{ root: classes.container }} item xs={12}>
        <Input
          id="email"
          placeholder="example@abc.com"
          helperText="Type your e-mail"
          label="Email"
          type="email"
          register={register}
          error={error}
          name="email"
        />

        <Button
          disableElevation={true}
          id="submit"
          size="large"
          value="Reset Password"
          className={classes}
          color={'success'}
          loading={loading}
        />

        <Label
          className={{ root: classes.link }}
          value="Have Account?"
          variant="subtitle2"
          isLink={true}
          to="/login"
          color="textSecondary"
        />
      </Grid>
    </>
  );
}
LoginForm.prototype = {
  register: Prototype.any,
  error: Prototype.object,
};
export default LoginForm;
