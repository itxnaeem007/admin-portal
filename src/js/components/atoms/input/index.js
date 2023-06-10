import React, { useState } from "react";
import Proptype from "prop-types";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import moment from "moment";
import { useStyles } from "../../organisms/dashboard-left-panel/style";

function Input(props) {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);
  const {
    id,
    variant,
    label,
    disable,
    defaultValue,
    type,
    className,
    value,
    helperText,
    placeholder,
    change,
    error,
    blur,
    register,
    hidden,
    pattern,
    name,
    // display,
    onKeyDown,
    changeInputValue,
    dateType,
    required,
    errorFlag,
    oninvalid,
  } = props;
  const hasError = (inputName) => !!(error && error[inputName]);
  return (
    <>
      <TextField
        inputRef={register}
        name={name}
        fullWidth
        style={{ display: hidden ? "none" : "block" }}
        hidden={hidden}
        classes={className}
        error={hasError(name)}
        defaultValue={defaultValue}
        disabled={disable}
        helperText={helperText}
        id={id}
        error={errorFlag}
        InputLabelProps={{
          shrink: "true",
        }}
        InputProps={{
          endAdornment:
            type === "password" ? (
              <InputAdornment onClick={toggleVisible} position="end">
                <IconButton aria-label="toggle password visibility">
                  {visible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ) : (
              <></>
            ),
        }}
        label={label}
        margin="normal"
        onChange={(e) => {
          if (dateType) {
            changeInputValue(name, e.target.value);
          }
          change(name, moment(e).format("MM/DD/YYYY"));
        }}
        onBlur={blur}
        placeholder={placeholder}
        type={
          type === "password" ? (visible === false ? "password" : "text") : type
        }
        onKeyDown={onKeyDown}
        variant={variant}
        value={value}
        required={required}
        inputProps={{ pattern: pattern }}
        oninvalid="setCustomValidity('Please enter alphabets.')"
      />
    </>
  );
}

Input.prototype = {
  id: Proptype.string,
  variant: Proptype.oneOf(["standard", "outlined", "filled"]),
  label: Proptype.string,
  disable: Proptype.bool,
  defaultValue: Proptype.string,
  type: Proptype.oneOf(["number", "text", "password"]),
  className: Proptype.object || Proptype.string,
  value: Proptype.string,
  helperText: Proptype.string,
  placeholder: Proptype.string,
  change: Proptype.func,
  error: Proptype.object,
  blur: Proptype.func,
  register: Proptype.any,
  name: Proptype.string,
  hidden: Proptype.bool,
};
Input.defaultProps = {
  variant: "standard",
  disable: false,
  error: false,
  change: () => { },
  blur: () => { },
  hidden: false,
};
export default Input;
