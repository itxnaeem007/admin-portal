import React, { useState } from "react";
import { useRouteMatch, Route, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { changePassword } from "../../../redux/actions/";
import { useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";
import { Input, Button, Label } from "../../atoms";
import { useStyle } from "../style";
const queryString = require('query-string');

function ConfirmPassword() {
  const history = useHistory();
  // Constants
  const dispatch = useDispatch();
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const mamatchtch = useRouteMatch();

  const parse = queryString.parse(window.location.search);
  const token = parse.token;

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    let response = await dispatch(
      changePassword(data.password1, token)
    );
    if (response === "success") {
      history.push("/login");
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.main}>
        <Grid classes={{ root: classes.container }} item xs={12}>
          <Input
            register={register({ required: true })}
            id="password1"
            error={errors}
            name="password1"
            placeholder="**********"
            helperText="Type your password"
            label="Password"
            type="password"
          />
        </Grid>
        <Grid classes={{ root: classes.container }} item xs={12}>
          <Button
            disableElevation={true}
            id="submit"
            size="large"
            value="Reset Password"
            className={classes}
            color={'success'}
            loading={loading}
          />
        </Grid>
        <Grid classes={{ root: classes.container }} item xs={12}>
          <Label
            className={{ root: classes.link }}
            value="Log in Now "
            variant="subtitle2"
            isLink={true}
            to="/login"
            color="textSecondary"
          />
        </Grid>
      </form>
    </>
  );
}

export default ConfirmPassword;
