import React from "react";
import Proptype from "prop-types";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    //textTransform: "capitalize",
  },
}));
function Label(props) {
  const classes = useStyle();
  const {
    align,
    className,
    color,
    display,
    gutterBottom,
    isLink,
    paragraph,
    noWrap,
    to,
    variant,
    value,
  } = props;
  const history = useHistory();
  const prevent = (e) => {
    e.preventDefault();
    if (isLink) history.push(to);
  };
  return (
    <>
      <Typography
        align={align}
        classes={className}
        className={classes.root}
        color={color}
        display={display}
        gutterBottom={gutterBottom}
        paragraph={paragraph}
        noWrap={noWrap}
        variant={variant}
        onClick={prevent}
      >
        {value}
      </Typography>
    </>
  );
}
Label.prototype = {
  align: Proptype.oneOf(["left", "center", "right", "justify"]),
  className: Proptype.object || Proptype.string,
  color: Proptype.oneOf([
    "primary",
    "secondary",
    "textPrimary",
    "textSecondary",
    "error",
    "link",
  ]),
  display: Proptype.oneOf(["block", "inline"]),
  gutterBottom: Proptype.bool,
  paragraph: Proptype.bool,
  noWrap: Proptype.bool,
  variant: Proptype.string,
  value: Proptype.string,
  isLink: Proptype.bool,
  to: Proptype.string,
};
Label.defaultProps = {
  display: "block",
  color: "textPrimary",
  align: "left",
};
export default Label;
