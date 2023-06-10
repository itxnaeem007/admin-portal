import React from "react";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Menu } from "@material-ui/icons";
import { toggleSidebar } from "../../../redux/actions";
import Proptype from "prop-types";
function MenuButton(props) {
  const { className, color } = props;
  const dispatch = useDispatch();
  return (
    <IconButton classes={className} onClick={() => dispatch(toggleSidebar())}>
      <Menu color={color} />
    </IconButton>
  );
}
MenuButton.prototype = {
  className: Proptype.object || Proptype.string,
  color: Proptype.string,
};
export default MenuButton;
