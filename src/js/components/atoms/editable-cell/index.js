import React from "react";
import Proptype from "prop-types";
import moment from "moment";
import { Input } from "../index";
const EditableCell = (props) => {
  const { data, cellInfo, active, register, errors } = props;
  return (
    <Input
      register={register}
      name={cellInfo.column.id}
      error={errors}
      defaultValue={
        cellInfo.column.id.includes("date")
          ? moment(data[cellInfo.index][cellInfo.column.id]).format(
              "DD-MM-YYYY"
            )
          : data[cellInfo.index][cellInfo.column.id]
      }
      helperText={cellInfo.column.id.includes("date") ? "DD-MM-YYYY" : ""}
      disable={!(active === data[cellInfo.index].id)}
      blur={(e) => {
        data[cellInfo.index][cellInfo.column.id] = e.target.value;
      }}
    />
  );
};
EditableCell.prototype = {
  data: Proptype.array || Proptype.object,
  handleData: Proptype.func,
  cellInfo: Proptype.object,
  active: Proptype.string || Proptype.number,
};
export default EditableCell;
