import {
  cloneElement,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import propsTypes from "prop-types";
import { Controller } from "react-hook-form";
import { FormValidationContext } from "./FormValidation";
import Validation from "./Validation";

const InputValidation = (props) => {
  const { control, errors } = useContext(FormValidationContext);

  const validationRules = useRef(props?.rules);
  const inputName = useRef(props?.name || props?.children?.props?.name);
  const inputLabel = useRef(props?.label || props?.children?.props?.label);
  const inputClassName = useRef(props?.children?.props?.className);
  const inputChange = useRef(props?.inputChange);

  const [validations, setValidations] = useState({});

  const checkValidation = useCallback(() => {
    var validationList = validationRules?.current?.split("|");

    validationList.forEach((validation) => {
      var childValidation = validation.split(":");

      if (typeof Validation[childValidation[0]] !== "undefined") {
        Validation[childValidation[0]](
          inputLabel?.current,
          setValidations,
          childValidation[1],
          inputName?.current
        );
      }
    });
  }, []);

  useEffect(() => {
    if (validationRules?.current) checkValidation();
  }, [checkValidation]);

  return (
    <>
      <Controller
        name={inputName?.current}
        control={control}
        rules={validations}
        render={({ field }) => {
          const { onChange, onBlur, value, name } = field;

          const handleChange = (name, value) => {
            onChange(value);

            inputChange.current && inputChange.current(name, value);
          };

          return (
            <>
              {cloneElement(props?.children, {
                name: name,
                // value: value,
                onBlur: onBlur,
                onChange: handleChange,
                rules: validationRules?.current
                  ? validationRules?.current?.split("|")
                  : [],
                className: `${inputClassName?.current} ${
                  errors[inputName?.current]
                    ? "is-invalid-custom"
                    : value && "is-valid-custom"
                }`,
              })}
              {errors[inputName?.current] && (
                <div className="ml-1 mt-1 text-red-600 text-[13px]">
                  {errors[inputName?.current]?.message}
                </div>
              )}
            </>
          );
        }}
      />
    </>
  );
};

InputValidation.propsTypes = {
  name: propsTypes.string,
  label: propsTypes.string,
  children: propsTypes.element,
};

export default InputValidation;
