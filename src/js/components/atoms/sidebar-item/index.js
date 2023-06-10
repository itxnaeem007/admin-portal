/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ListItem, Icon, ListItemText, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import Proptype from "prop-types";

function SidebarItem(props) {
  const { text, icon, to, click } = props;
  const history = useHistory();
  const location = useLocation();
  const classes = useStyle();
  const [active, setActive] = useState(false);
  const push = (e) => {
    //console.log(click);
    history.push(e);
  };
  useEffect(() => {
    if (location.pathname === to) {
      setActive(true);
    }
  }, []);
  return (
    <ListItem
      onClick={() => (click ? click() : push(to))}
      classes={{ root: active ? classes.active : classes.container }}
    >
      <Icon
        classes={{ root: classes.icon }}
        color={active ? "primary" : "secondary"}
      >
        {icon}
      </Icon>
      <ListItemText
        primary={
          <Typography
            variant="subtitle2"
            color={active ? "primary" : "secondary"}
          >
            {text}
          </Typography>
        }
      />
    </ListItem>
  );
}
const useStyle = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0.6, 2),
    borderRadius: theme.typography.pxToRem(5),
    marginTop: theme.typography.pxToRem(10),
    cursor: "pointer",
  },
  icon: {
    padding: theme.typography.pxToRem(10),
  },
  active: {
    backgroundColor: "white",
    padding: theme.spacing(0.6, 2),
    borderRadius: theme.typography.pxToRem(5),
    marginTop: theme.typography.pxToRem(10),
    cursor: "pointer",
  },
}));
SidebarItem.Proptype = {
  text: Proptype.string,
  icon: Proptype.string,
  click: Proptype.fun,
};
export default SidebarItem;
