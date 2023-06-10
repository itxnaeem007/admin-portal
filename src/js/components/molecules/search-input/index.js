import React from "react";
import { Input, Button } from "../../atoms";
import { Grid } from "@material-ui/core";
import Proptype from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    borderRadius: "25px",
    fontSize: '11px'
  },
}));

function SearchInput(props) {
  const classes = useStyle();

  const {
    loading,
    label,
    disable,
    className,
    value,
    changeInputValue,
    onSearch
  } = props;

  const onKeyDown = (e) => {
    const value = e?.target?.value;
    if (e.keyCode == 13 && !!value) {
      onSearch(e.target.value);
    }
  }

  return (
    <>
      <Grid item xs={3}>
        <Input
          label={label}
          disable={disable}
          type={"search"}
          className={className}
          value={value}
          placeholder={"Search"}
          changeInputValue={changeInputValue}
          onKeyDown={onKeyDown}
          dateType={true}
        />
      </Grid>
      {/* <Grid item xs={1}>
        <Button
          value="Search"
          click={onSearch}
          loading={loading}
          className={{ root: classes.root }}
        />
      </Grid> */}
    </>
  );
}
SearchInput.prototype = {
  loading: Proptype.bool,
  label: Proptype.string,
  disable: Proptype.bool,
  className: Proptype.object || Proptype.string,
  value: Proptype.string
};
export default SearchInput;