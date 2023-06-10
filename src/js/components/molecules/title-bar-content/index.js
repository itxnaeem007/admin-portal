import React from "react";
import { Label } from "../../atoms";
import { makeStyles } from "@material-ui/core/styles";
import Proptype from "prop-types";
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    marginRight: '30px'
  },
  count: {
    marginLeft: theme.typography.pxToRem(10),
  },
}));
function TitleBarContent(props) {
  const { name, value } = props;
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Label variant="h6" value={name} color="textPrimary" />
      <Label
        variant="h6"
        className={{ root: classes.count }}
        value={`(${value})`}
        color="primary"
      />
    </div>
  );
}
TitleBarContent.prototype = {
  name: Proptype.string,
  value: Proptype.number || Proptype.string,
};
export default TitleBarContent;
