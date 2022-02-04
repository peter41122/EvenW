import { useState, forwardRef, useImperativeHandle } from "react";
import propsTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Header from "./headers";

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreen = forwardRef(
  ({ visible, className, title, children }, ref) => {
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
      <>
        <Dialog
          className={className}
          open={open}
          TransitionComponent={Transition}
          onClose={handleChangeStatus}
          fullScreen
        >
          <Header title={title} backPress={handleChangeStatus} />
          {children}
        </Dialog>
      </>
    );
  }
);

FullScreen.propsTypes = {
  visible: propsTypes.bool,
  className: propsTypes.string,
};

export default FullScreen;
