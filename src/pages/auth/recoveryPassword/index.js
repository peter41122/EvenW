import { useState } from "react";
import { BtnPrimary } from "../../../components/buttons";
import Input from "../../../components/inputs";
import {
  FormValidation,
  InputValidation,
} from "../../../components/validations";

const RecoveryPassword = () => {
  const [state, setState] = useState({ email: "" });

  const handleSubmit = (data) => {
    alert(`Recovery Password ${JSON.stringify(data)}`);
  };

  const handleChange = (name, value) => {
    setState((res) => ({ ...res, [name]: value }));
  };

  return (
    <>
      <div className=" mt-20 sm:max-w-[550px] mx-auto mx-2 sm:mx-auto">
        <div className=" text-4xl text-blue-900">Trouble Logging In?</div>
        <FormValidation
          onSubmit={handleSubmit}
          state={state}
          render={(handleSubmit, errors) => (
            <div className="mt-[50px]">
              <div className="sm:inline-block">
                <InputValidation
                  label="Email"
                  rules="required|email"
                  inputChange={handleChange}
                >
                  <Input
                    name="email"
                    label="Email"
                    value={state.email}
                    className="w-full sm:min-w-[25rem]"
                    placeholder="Your email"
                    type="email"
                  />
                </InputValidation>
              </div>
              <div
                className={`sm:inline-block mt-4 md:m-0 ${
                  errors?.email && "md:align-top md:mt-7"
                }`}
              >
                <BtnPrimary
                  className="w-full py-3 px-8 sm:ml-3 rounded-full"
                  onClick={handleSubmit}
                >
                  Send
                </BtnPrimary>
              </div>
            </div>
          )}
        />
        <div className="mt-4 text-gray-500">
          <div>We'll send you a link to reset your password</div>
        </div>
      </div>
    </>
  );
};

export default RecoveryPassword;
