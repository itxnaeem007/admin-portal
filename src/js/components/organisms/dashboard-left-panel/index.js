import React from "react";
import { Drawer } from "@material-ui/core";
import { useStyles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../../redux/actions";
import { toast } from "react-toastify";
import clsx from "clsx";
import SidebarMolecules from "../../molecules/sidebar-list";
import Navbar from "../navbar";
import { MenuButton } from "../../atoms";
function LeftPanel(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const open = useSelector(({ Setting }) => Setting.open);
  const logout = () => {
    dispatch(handleLogout());
    toast.success("Logout Successfully.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
    toast.clearWaitingQueue();
  };
  return (
    <div className={classes.root}>
      <Navbar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          {/* <img className={classes.logo} src="/img/white-logo.png" alt="" /> */}
          <p style={{color : 'white' , fontSize : '10px'}}>Black Americas Emergency</p>
          <MenuButton color="secondary" className={{ root: classes.btn }} />
        </div>
        <SidebarMolecules
          items={[
            { text: "users", icon: "people", to: "/Users" },
            { text: "Logout", icon: "logout", to: "/logout", click: logout },
          ]}
        />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {props.children}
      </main>
    </div>
  );
}
export default LeftPanel;
