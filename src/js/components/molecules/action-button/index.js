import React from "react";
import { Button } from "../../atoms";
import { makeStyles } from "@material-ui/core/styles";
import Proptype from "prop-types";


const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 'auto'
  },
  button: {
    borderRadius: 25,
    padding: "0.5em 2.0em",
    margin: "0 0.5em",
    fontSize: "12px"
  },
  buttonFirst: {
    borderRadius: 25,
    padding: "0.5em 2.0em",
    margin: "0 0.0em",
    fontSize: "12px"
  }
}));
function ActionButton(props) {
  const { name, action, setFilter, action2, name2, onSearch } = props;
  const classes = useStyle();
  const setFilterDefault = () => {
    setFilter('All');
  }
  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        disableElevation={true}
        color="inherit"
        value="Clear"
        className={{ root: classes.button }}
        click={setFilterDefault}
      />
      <Button
        click={action}
        variant="contained"
        disableElevation={true}
        color="primary"
        value={name}
        className={{ root: classes.button }}
      />
      <Button
        click={action2}
        variant="contained"
        disableElevation={true}
        color="primary"
        value={name2}
        className={{ root: classes.buttonFirst }}
      />
    </div>
  );
}
ActionButton.prototype = {
  name: Proptype.string.isRequired,
  action: Proptype.func,
  filter: Proptype.func,
  action2: Proptype.func,
  name2: Proptype.string,
};
export default ActionButton;
