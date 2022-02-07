import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BtnPrimary } from "../../components/buttons";
import { FullScreen } from "../../components/dialogs";
import Input from "../../components/inputs";
import { FormValidation, InputValidation } from "../../components/validations";

const SendMoneyConfirm = forwardRef((props, ref) => {
  const sendMoneyConfirm = useRef();

  useImperativeHandle(ref, () => ({
    changeStatus() {
      handleChangeStatus();
    },
  }));

  const [state, setState] = useState({
    bankDeposit: "",
    cashPickup: "",
    mobileWallet: "",
  });

  const handleSubmit = (data) => {
    alert(`SEND MONEY CONFIRM ${JSON.stringify(data)}`);
  };

  const handleChange = (name, value) => {
    setState((res) => ({ ...res, [name]: value }));
  };

  const handleChangeStatus = () => {
    sendMoneyConfirm.current?.changeStatus();
  };

  return (
    <>
      <FullScreen ref={sendMoneyConfirm} title="Send Money">
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-full">
          <div className="hidden md:block bg-blue-custom relative">
            <IconButton
              className="absolute left-10 top-10"
              color="inherit"
              component="span"
              onClick={handleChangeStatus}
            >
              <CloseIcon fontSize="large" className="text-white" />
            </IconButton>
          </div>

          <FormValidation
            onSubmit={handleSubmit}
            state={state}
            render={(handleSubmit) => (
              <>
                <div className="flex flex-col md:justify-center mt-10 md:w-[24rem] lg:w-[32rem] xl:w-[34rem] md:mt-0 md:mx-auto px-3 h-full">
                  <div className="text-center mb-3 font-semibold text-2xl">
                    Send Money
                  </div>
                  <div className="bg-gray-200 w-full h-[2px] mb-[2rem] md:mb-10">
                    <div className="bg-yellow-400 h-[2px] w-[80%]" />
                  </div>
                  <div className="mb-6 ml-1">Choose your preferred method</div>
                  <InputValidation
                    label="Bank Deposit"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="bankDeposit"
                      value={state.bankDeposit}
                      placeholder="Bank Deposit"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Cash Pickup"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="cashPickup"
                      value={state.cashPickup}
                      className="mt-5"
                      placeholder="Cash Pickup"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Mobile Wallet"
                    rules="required|mobile"
                    inputChange={handleChange}
                  >
                    <Input
                      name="mobileWallet"
                      value={state.mobileWallet}
                      className="mt-5"
                      placeholder="Mobile Wallet"
                      type="tel"
                    />
                  </InputValidation>
                  <div className="text-[14px] mt-2 mb-10 font-medium text-gray-500 ml-1">
                    * Estimated Delivery 1-3 Days based on receiver's location
                  </div>
                  <BtnPrimary onClick={handleSubmit}>Confirm</BtnPrimary>
                </div>
              </>
            )}
          />
        </div>
      </FullScreen>
    </>
  );
});

export default SendMoneyConfirm;
