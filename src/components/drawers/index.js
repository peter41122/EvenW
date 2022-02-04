import React, { useState, forwardRef, useImperativeHandle } from "react";
import propsTypes from "prop-types";
import Drawer from "@mui/material/Drawer";

const Drawers = forwardRef(({ visible, anchor, className, children }, ref) => {
  const [open, setOpen] = useState(visible || false);

  useImperativeHandle(ref, () => ({
    changeStatus() {
      handleChangeStatus();
    },
  }));

  const handleChangeStatus = () => {
    setOpen(!open);
  };

  return (
    <Drawer anchor={anchor} open={open} onClose={handleChangeStatus}>
      <div
        className={`${className} w-[250px]`}
        role="presentation"
        onClick={handleChangeStatus}
        onKeyDown={handleChangeStatus}
      >
        {children}
      </div>
    </Drawer>
  );
});

Drawers.propsTypes = {
  visible: propsTypes.bool,
  anchor: propsTypes.string,
  className: propsTypes.string,
};

Drawers.defaultProps = {
  anchor: "right",
};

export default Drawers;
