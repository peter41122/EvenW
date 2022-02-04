import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BtnPrimary } from "../../components/buttons";
import { FullScreen } from "../../components/dialogs";
import Input from "../../components/inputs";
import { FormValidation, InputValidation } from "../../components/validations";

const RecipientRegistration = forwardRef((props, ref) => {
  const recipientRegistration = useRef();

  useImperativeHandle(ref, () => ({
    changeStatus() {
      handleChangeStatus();
    },
  }));

  const [state, setState] = useState({
    fullName: "",
    email: "",
    bankName: "",
    accountNumber: "",
    recipientLocation: "",
    amountReceived: "",
  });

  const handleSubmit = (data) => {
    alert(`SEND MONEY ${JSON.stringify(data)}`);
  };

  const handleChange = (name, value) => {
    setState((res) => ({ ...res, [name]: value }));
  };

  const handleChangeStatus = () => {
    recipientRegistration.current?.changeStatus();
  };

  return (
    <>
      <FullScreen ref={recipientRegistration} title="Recipient Registration">
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-full">
          <FormValidation
            onSubmit={handleSubmit}
            state={state}
            render={(handleSubmit) => (
              <>
                <div className="flex flex-col md:justify-center mt-10 md:w-[24rem] lg:w-[32rem] xl:w-[34rem] md:mt-0 md:mx-auto px-3 h-full">
                  <div className="text-center mb-3 font-semibold text-2xl">
                    Recipient Registration
                  </div>
                  <div className="bg-gray-200 w-full h-[2px] mb-[2rem] md:mb-10">
                    <div className="bg-yellow-400 h-[2px] w-[80%]" />
                  </div>
                  <InputValidation
                    label="Recipient Full Name"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="fullName"
                      value={state.fullName}
                      placeholder="Recipient Full Name"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Email address"
                    rules="required|email"
                    inputChange={handleChange}
                  >
                    <Input
                      name="email"
                      value={state.email}
                      className="mt-5"
                      placeholder="Email address"
                      type="email"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Bank Name"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="bankName"
                      value={state.bankName}
                      className="mt-5"
                      placeholder="Bank Name"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Account Number"
                    rules="required|numeric"
                    inputChange={handleChange}
                  >
                    <Input
                      name="accountNumber"
                      value={state.accountNumber}
                      className="mt-5"
                      placeholder="Account Number"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Recipient Location"
                    rules="required"
                    inputChange={handleChange}
                  >
                    <Input
                      name="recipientLocation"
                      value={state.recipientLocation}
                      className="mt-5"
                      placeholder="Recipient Location"
                    />
                  </InputValidation>
                  <InputValidation
                    label="Amount to be received"
                    rules="required|numeric"
                    inputChange={handleChange}
                  >
                    <Input
                      name="amountReceived"
                      value={state.amountReceived}
                      className="mt-5"
                      placeholder="Amount to be received"
                    />
                  </InputValidation>
                  <BtnPrimary className="mt-10" onClick={handleSubmit}>
                    Confirm
                  </BtnPrimary>
                </div>
              </>
            )}
          />
          <div className="hidden md:block bg-blue-cu relative">
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

export default RecipientRegistration;
