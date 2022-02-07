import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { BtnPrimary } from "../../components/buttons";
import { FullScreen } from "../../components/dialogs";
import Input from "../../components/inputs";
import { FormValidation, InputValidation } from "../../components/validations";

const TransferConfirm = forwardRef((props, ref) => {
  const transferConfirm = useRef();

  useImperativeHandle(ref, () => ({
    changeStatus() {
      handleChangeStatus();
    },
  }));

  const [state, setState] = useState({
    mobile: "",
  });

  const handleSubmit = (data) => {
    alert(`Transfer Confirm ${JSON.stringify(data)}`);
  };

  const handleChange = (name, value) => {
    setState((res) => ({ ...res, [name]: value }));
  };

  const handleChangeStatus = () => {
    transferConfirm.current?.changeStatus();
  };

  return (
    <>
      <FullScreen ref={transferConfirm} title="Confirm Transfer">
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-full">
          <FormValidation
            onSubmit={handleSubmit}
            state={state}
            render={(handleSubmit) => (
              <>
                <div className="flex flex-col md:justify-center mt-10 md:w-[24rem] lg:w-[32rem] xl:w-[34rem] md:mt-0 md:mx-auto px-3 h-full">
                  <div className="md:hidden">
                    <IconButton
                      className="absolute left-3 top-5"
                      color="inherit"
                      component="span"
                      onClick={handleChangeStatus}
                    >
                      <CloseIcon fontSize="large" className="text-gray-800" />
                    </IconButton>
                  </div>
                  <div className="text-center mb-3 font-semibold text-2xl">
                    Confirm Transfer
                  </div>
                  <div className="bg-gray-200 w-full h-[2px] mb-[2rem] md:mb-10">
                    <div className="bg-yellow-400 h-[2px] w-[80%]" />
                  </div>
                  <InputValidation
                    label="Mobile Number"
                    rules="required|mobile"
                    inputChange={handleChange}
                  >
                    <Input
                      name="mobile"
                      label="Mobile Number:"
                      placeholder="Mobile Number"
                    />
                  </InputValidation>
                  <div className="text-[14px] mb-10 mt-2 font-medium text-gray-500 ml-1">
                    Enter your phone number to verify your payment.
                  </div>
                  <BtnPrimary onClick={handleSubmit}>Confirm</BtnPrimary>
                  <div className="text-[14px] mt-1 text-center text-gray-500">
                    You didn't receive a code?
                    <span className="ml-1 text-gray-900">
                      <NavLink to="">Resend code</NavLink>
                    </span>
                  </div>
                </div>
              </>
            )}
          />
          <div className="hidden md:block bg-blue-custom relative">
            <IconButton
              className="absolute right-10 top-10"
              color="inherit"
              component="span"
              onClick={handleChangeStatus}
            >
              <CloseIcon fontSize="large" className="text-white" />
            </IconButton>
          </div>
        </div>
      </FullScreen>
    </>
  );
});

export default TransferConfirm;
