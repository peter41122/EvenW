import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BtnPrimary } from "../../components/buttons";
import { FullScreen } from "../../components/dialogs";
import Input from "../../components/inputs";
import { FormValidation, InputValidation } from "../../components/validations";

const Transfer = forwardRef((props, ref) => {
  const transfer = useRef();

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
    transfer.current?.changeStatus();
  };

  return (
    <>
      <FullScreen ref={transfer} title="Transfer Summary">
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-full">
          <div className="hidden md:block bg-blue-cu relative">
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
                    Transfer Summary
                  </div>
                  <div className="bg-gray-200 w-full h-[2px] mb-[2rem] md:mb-10">
                    <div className="bg-yellow-400 h-[2px] w-[80%]" />
                  </div>
                  <InputValidation
                    label="Amount to send"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="amountSend"
                      value={state.amountSend}
                      label="Amount to send:"
                      placeholder="Amount to send"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Fees"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="Fees"
                      value={state.Fees}
                      className="mt-3"
                      label="Fees:"
                      placeholder="Fees"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Total cost"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="totalCost"
                      value={state.totalCost}
                      className="mt-3"
                      label="Total cost:"
                      placeholder="Total cost"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Total to Recipient"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="totalRecipient"
                      value={state.totalRecipient}
                      className="mt-3"
                      label="Total to Recipient:"
                      placeholder="Total to Recipient"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Exchange Rate"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="exchangeRate"
                      value={state.totalRecipient}
                      className="mt-3"
                      label="Exchange Rate:"
                      placeholder="Exchange Rate"
                    />
                  </InputValidation>
                  <BtnPrimary className="mt-5" onClick={handleSubmit}>
                    Confirm
                  </BtnPrimary>
                  <div className="text-center text-[14px] mt-1 mb-2">
                    * Estimated Delivery 1-3 Days based on receiver's location
                  </div>
                </div>
              </>
            )}
          />
        </div>
      </FullScreen>
    </>
  );
});

export default Transfer;
