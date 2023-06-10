import React from "react";
import Proptype from "prop-types";
import { Icon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
}));
function IconText(props) {
  const { text, icon } = props;
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Icon>{icon}</Icon>
      <Typography>{text}</Typography>
    </div>
  );
}
IconText.prototype = {
  text: Proptype.string,
  icon: Proptype.string,
  to: Proptype.string,
  disabled: Proptype.bool,
};

export default IconText;
