/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import { Label, MenuButton } from "../../atoms";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Proptype from "prop-types";
function Navbar(props) {
  const classes = useStyle();
  const { className } = props;
  const [name, setName] = useState(null);
  const open = useSelector(({ Setting }) => Setting.open);
  const location = useLocation();
  const RouteHeading = () => {
    let name = "";
    let path = location.pathname;
    //console.log(path);
    if (path) {
      path = path.split("/")[1];
      path = path.split("-");
      if (path.length > 1) {
        path.map((v) => (name += `${v} `));
      } else name = path;
    }
    return name;
  };
  useEffect(() => {
    const name = RouteHeading();
    setName(name);
  }, []);
  return (
    <AppBar elevation={0} className={className} color="secondary">
      <div className={classes.container}>
        {!open ? <MenuButton color="primary" /> : null}{" "}
        <Label color="textSecondary" variant="h5" value={name} />
      </div>
      {/* <HeaderAvatar /> */}
    </AppBar>
  );
}
Navbar.prototype = {
  className: Proptype.string,
};
const useStyle = makeStyles((theme) => ({
  container: {
    alignItems: "center",
    display: "flex",
  },
}));
export default Navbar;
