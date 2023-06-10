import React from "react";
import Proptype from "prop-types";
import { Button } from "@material-ui/core";

function Buttons(props) {
  const {
    id,
    variant,
    color,
    disable,
    size,
    className,
    value,
    click,
    disableElevation,
    loading,
    type
  } = props;
  return (
    <>
      <Button
        id={id}
        variant={variant}
        color={color}
        disabled={disable}
        disableElevation={disableElevation}
        size={size}
        classes={className}
        onClick={click}
        type={type || "submit"}
      >
        {!loading ? value : <><img src="/img/spin-loader.svg" alt="" width={40} height={30} /></>}
      </Button>
    </>
  );
}

Buttons.prototype = {
  id: Proptype.string,
  variant: Proptype.string,
  color: Proptype.oneOf(["primary", "secondary", "info", "default" , 'success']),
  disable: Proptype.bool,
  size: Proptype.oneOf(["small", "medium", "large"]),
  className: Proptype.object,
  value: Proptype.string,
  click: Proptype.func,
  disableElevation: Proptype.bool,
};
Buttons.defaultProps = {
  variant: "contained",
  color: "primary",
  size: "small",
  disable: false,
};
export default Buttons;
