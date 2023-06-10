import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Proptype from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
}));
function Avatars(props) {
  const classes = useStyle();
  const { name } = props;
  return <Avatar classes={classes}>{name[0]}</Avatar>;
}
Avatars.prototype = {
  name: Proptype.string,
};
export default Avatars;
