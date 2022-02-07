import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AlertWarning, AletPrimary } from "../../components/alerts";
import { BtnPrimary } from "../../components/buttons";
import { FullScreen } from "../../components/dialogs";
import Input from "../../components/inputs";
import { FormValidation, InputValidation } from "../../components/validations";

const SendMoney = forwardRef((props, ref) => {
  const sendMoney = useRef();

  useImperativeHandle(ref, () => ({
    changeStatus() {
      handleChangeStatus();
    },
  }));

  const [state, setState] = useState({
    payType: "",
    amount: "",
  });

  const handleSubmit = (data) => {
    alert(`SEND MONEY ${JSON.stringify(data)}`);
  };

  const handleChange = (name, value) => {
    setState((res) => ({ ...res, [name]: value }));
  };

  const handleChangeStatus = () => {
    sendMoney.current?.changeStatus();
  };

  return (
    <>
      <FullScreen ref={sendMoney} title="Send Money">
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
                  <AlertWarning className="mb-6">
                    Amount to be transfer
                  </AlertWarning>
                  <AletPrimary className="mb-1">Amount received</AletPrimary>
                  <div className="text-[12px] text-gray-400 mb-4 ml-1">
                    * Estimated Delivery 1-3 Days
                  </div>
                  <InputValidation
                    label="Pay what you want"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="payType"
                      value={state.payType}
                      placeholder="Pay what you want"
                    />
                  </InputValidation>
                  <div className="text-[12px] text-gray-400 mt-1 ml-1 mb-3">
                    * You decide what fee you pay.
                  </div>
                  <div className="border-bottom mb-7" />
                  <InputValidation
                    label="Amount Paid"
                    rules="numeric|required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="amount"
                      value={state.amount}
                      placeholder="Amount Paid"
                    />
                  </InputValidation>
                  <BtnPrimary className="mt-10" onClick={handleSubmit}>
                    Continue
                  </BtnPrimary>
                </div>
              </>
            )}
          />
        </div>
      </FullScreen>
    </>
  );
});

export default SendMoney;
