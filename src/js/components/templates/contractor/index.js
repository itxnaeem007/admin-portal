import React from "react";
import DashboardTemplate from "../dashboard";
import { makeStyles } from "@material-ui/core/styles";
import Proptype from "prop-types";

function ContractorTemplate(props) {
  const classes = useStylePanel();

  return (
    <>
      <DashboardTemplate>
        <div className={classes.flex}></div>
        {props.children}
      </DashboardTemplate>
    </>
  );
}

const useStylePanel = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.typography.pxToRem(10),
  },
}));
export { useStylePanel };

ContractorTemplate.prototype = {
  value: Proptype.number,
};

export default ContractorTemplate;
