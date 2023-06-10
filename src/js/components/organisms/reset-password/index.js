import React from "react";
import { Grid } from "@material-ui/core";
import { ResetForm } from "../../molecules/";
import { Label } from "../../atoms";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { resetPassword } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function LoginOrganism() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [loading, setLoading] = React.useState(false);

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = async (e) => {
    setLoading(true);
    const resFlag = await dispatch(resetPassword(e));
    setLoading(resFlag);
  };

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
          <Label value="Reset Password" variant="h4" />
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <ResetForm
            register={register({ required: true })}
            error={errors}
            loading={loading}
          />
        </form>
      </Grid>
    </Grid>
  );
}

const useStyle = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
}));
export default LoginOrganism;
