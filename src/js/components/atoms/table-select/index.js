import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select, InputLabel } from "@material-ui/core";
import Proptype from "prop-types";
import { Controller } from "react-hook-form";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  labelText: {
    color: '#8898AA',
    fontSize: '11px'
  }
}));

function ReactSelect(props) {
  const classes = useStyles();
  const {
    label,
    options,
    control,
    defaultValue,
    register,
    errors,
    name,
    changeValueSelect,
    setJobstatus,
    isDisable,
  } = props;
  const hasError = (inputName) => !!(errors && errors[inputName]);
  return (
    <div className={classes.formControl}>
      <text className={classes.labelText}>{label}</text>
      <Controller
        rules={{ required: true }}
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={(props) => {
          return (
            <Select
              innerRef={register}
              ref={register}
              labelId={label}
              label={label}
              id={label}
              error={hasError(name)}
              name={name}
              disabled={isDisable}
              value={props.value}
              helperText=""
              fullWidth
              onChange={(e) => {
                changeValueSelect(name, e.target.value)
                props.onChange(e.target.value);
                if (e.target.value === 'On Hold') {
                  setJobstatus(e.target.value)
                } else {
                  setJobstatus('')
                }
              }}
              inputProps={{
                shrink: "true",
              }}
            >
              {options.map((v, k) => (
                <MenuItem key={k} value={v.value} disabled={v.name === 'Archived'}>
                  {v.name}
                </MenuItem>
              ))}
            </Select>
          );
        }}
      />
    </div>
  );
}
ReactSelect.prototype = {
  label: Proptype.string,
  value: Proptype.string || Proptype.number,
  options: Proptype.array,
  defaultValue: Proptype.string,
  name: Proptype.string,
};
export default ReactSelect;
