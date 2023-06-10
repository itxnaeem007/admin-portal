import React from "react";
import PanelOrgasims from "../../organisms/dashboard-left-panel";

function Dashboard(props) {
  return (
    <>
      <PanelOrgasims>{props.children}</PanelOrgasims>
    </>
  );
}
export default Dashboard;
