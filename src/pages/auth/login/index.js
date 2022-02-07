import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Notification from "../../../services/notification";
import Input from "../../../components/inputs";
import { BtnPrimary, BtnGray } from "../../../components/buttons";
import {
  FormValidation,
  InputValidation,
} from "../../../components/validations";

const Login = () => {
  const navigate = useNavigate();

  const [isLoadingSendData, setIsLoadingSendData] = useState(false);
  const [state, setState] = useState({
    email: "info@even.com",
    password: "123456789",
  });

  const handleSubmit = (data) => {
    setIsLoadingSendData(true);

    setTimeout(() => {
      setIsLoadingSendData(false);

      Notification.success("You have successfully logged in.");
    }, 2000);
  };

  const handleChange = (name, value) => {
    setState((res) => ({ ...res, [name]: value }));
  };

  const handleChangeRoute = (route, data) => {
    navigate(route, data);
  };

  return (
    <>
      <div className="mt-20 sm:max-w-[430px] mx-auto mx-2 sm:mx-auto">
        <div className="text-2xl text-center">Welcome Back</div>
        <div className="text-1xl text-center">
          Login to your Even merchant account
        </div>
        <FormValidation
          onSubmit={handleSubmit}
          state={state}
          render={(handleSubmit) => (
            <div className="mt-[50px]">
              <InputValidation
                label="Email"
                rules="required|email"
                inputChange={handleChange}
              >
                <Input
                  name="email"
                  value={state.email}
                  className="w-full sm:min-w-[25rem]"
                  placeholder="Email Address"
                  type="email"
                />
              </InputValidation>
              <InputValidation
                label="Password"
                rules="required"
                inputChange={handleChange}
              >
                <Input
                  name="password"
                  value={state.password}
                  className="w-full sm:min-w-[25rem] mt-5"
                  placeholder="Password"
                  type="password"
                />
              </InputValidation>

              <div className="text-gray-500 text-right mt-4 mb-6 text-[13px]">
                <NavLink to="/password/reset">Forget Password?</NavLink>
              </div>

              <BtnPrimary
                className="w-full py-3 px-8 rounded-full mb-4"
                isLoading={isLoadingSendData}
                onClick={handleSubmit}
              >
                Login
              </BtnPrimary>
              <BtnGray
                className="w-full py-3 px-8 rounded-full"
                onClick={() => handleChangeRoute("/register")}
              >
                Open an account
              </BtnGray>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default Login;
