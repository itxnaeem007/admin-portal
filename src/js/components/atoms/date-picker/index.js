import React from "react";
import { Controller } from "react-hook-form";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Proptype from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
function DatePicker(props) {
  const { error, control, name, label, defaultValue, change, value } = props;
  return (
    <Controller
      rules={{ required: false }}
      as={
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            error={!!error[name]}
            inputVariant="standard"
            format="dd/MM/yyyy"
            label={label}
            required
            fullWidth
            value={value}
            // helperText=""
            onChange={(e) => change(name, moment(e).format("MM/DD/YYYY"))}
          />
        </MuiPickersUtilsProvider>
      }
      defaultValue={moment(defaultValue).format("MM/DD/YYYY")}
      name={name}
      control={control}
    />
  );
}
DatePicker.prototype = {
  error: Proptype.object,
  control: Proptype.any,
  name: Proptype.string,
  label: Proptype.string,
  defaultValue: Proptype.string,
  change: Proptype.func,
  value: Proptype.any,
};
export default DatePicker;
