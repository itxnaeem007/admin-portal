import React from "react";
import { Avatar, Label } from "../../atoms";
import { useStyle } from "./style";
function HeaderAvatar() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Avatar name="Jafeel" />
      <Label
        className={{ root: classes.label }}
        variant="subtitle1"
        value="Jafeel"
        color="textSecondary"
      />
    </div>
  );
}
export default HeaderAvatar;
