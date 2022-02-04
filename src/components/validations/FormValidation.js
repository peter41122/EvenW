import { createContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormValidationContext = createContext();

const FormValidation = ({ onSubmit, render, state }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    defaultValues: {
      ...state,
    },
  });

  useEffect(() => {
    reset(state, { keepErrors: true });
  }, [state, reset]);

  return (
    <>
      <FormValidationContext.Provider value={{ control, errors, state }}>
        <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
          {render(handleSubmit(onSubmit), errors, control)}
        </form>
      </FormValidationContext.Provider>
    </>
  );
};

export default FormValidation;
