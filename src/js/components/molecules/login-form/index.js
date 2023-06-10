import React, { useState } from "react";
import { Input, Button, Label } from "../../atoms";
import { Grid } from "@material-ui/core";
import { useStyle } from "../style";
import { useForm } from "react-hook-form";
import { handleLogin } from "../../../redux/actions/";
import { useDispatch } from "react-redux";


function LoginForm() {

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const classes = useStyle();
  const [loading, setLoading] = useState(false)
  
  const onSubmit = async (data) => {
    setLoading(true);
    const resFlag = await dispatch(handleLogin(data.email, data.password));
    setLoading(resFlag);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.main}>
      <Grid classes={{ root: classes.container }} item xs={12}>
        <Input
          register={register({ required: true })}
          id="email"
          error={errors}
          name="email"
          placeholder="example@abc.com"
          helperText="Type your e-mail"
          label="Email"
          type="email"
        />
      </Grid>
      <Grid item xs={12}>
        <Input
          register={register({ required: true })}
          id="password"
          error={errors}
          name="password"
          placeholder="*********"
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
          value="Sign In"
          className={classes}
          color={'success'}
          loading={loading}
        />
      </Grid>
      <Grid classes={{ root: classes.container }} item xs={12}>
        <Label
          className={{ root: classes.link }}
          value="Reset your password?"
          variant="subtitle2"
          isLink={true}
          to="/reset-password"
          color="textSecondary"
        />
      </Grid>
    </form>
  );
}

export default LoginForm;
