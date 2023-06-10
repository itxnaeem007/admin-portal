import React from "react";
import Proptype from "prop-types";
import ListAtom from "../../atoms/sidebar-item";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyle = makeStyles((theme) => ({
  List: {
    padding: theme.typography.pxToRem(20),
  },
}));
function SidebarList(props) {
  const classes = useStyle();
  const { items } = props;
  return (
    <List component="nav" classes={{ root: classes.List }}>
      {items.map((v, k) => (
        <ListAtom
          text={v.text}
          to={v.to}
          click={v.click}
          icon={v.icon}
          key={k}
        />
      ))}
    </List>
  );
}
SidebarList.Proptype = {
  items: Proptype.object,
};
SidebarList.defaultProps = {
  items: [],
};
export default SidebarList;
