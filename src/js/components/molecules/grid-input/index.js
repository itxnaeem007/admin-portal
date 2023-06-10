import React from "react";
import { Input } from "../../atoms";
import { Grid } from "@material-ui/core";
import Proptype from "prop-types";
function GridInput(props) {
  const {
    label,
    disable,
    defaultValue,
    type,
    className,
    gridClassName,
    value,
    helperText,
    placeholder,
    error,
    register,
    name,
    changeInputValue,
    dateType,
    required,
    column
  } = props;
  return (
    <Grid item xs={column || 4} className={ gridClassName || "" }>
      <Input
        label={label}
        disable={disable}
        defaultValue={defaultValue}
        type={type}
        className={className}
        value={value}
        helperText={helperText}
        placeholder={placeholder}
        error={error}
        register={register}
        name={name}
        changeInputValue={changeInputValue}
        dateType={dateType}
        required={required}
      />
    </Grid>
  );
}
GridInput.prototype = {
  label: Proptype.string,
  disable: Proptype.bool,
  defaultValue: Proptype.string,
  type: Proptype.oneOf(["number", "text", "password"]),
  className: Proptype.object || Proptype.string,
  value: Proptype.string,
  helperText: Proptype.string,
  placeholder: Proptype.string,
  error: Proptype.object,
  register: Proptype.any,
  name: Proptype.string,
};
export default GridInput;
