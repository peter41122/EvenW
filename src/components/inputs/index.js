import propsTypes from "prop-types";

const Input = ({
  name,
  label,
  value,
  placeholder,
  className,
  autoComplete,
  onChange,
  rules,
  ...props
}) => {
  const handleChange = (e) => {
    onChange && onChange(name, e?.target?.value);
  };

  return (
    <>
      <div className={className}>
        {label && (
          <label className="block mb-2 text-[14px]">
            {rules.includes("required") && (
              <span className="text-red-600 mr-1">*</span>
            )}
            {label}
          </label>
        )}
        <input
          name={name}
          value={value}
          className="bg-gray-custom p-3 text-[14px] w-full"
          placeholder={placeholder}
          onChange={handleChange}
          autoComplete={autoComplete}
          {...props}
        />
      </div>
    </>
  );
};

Input.propsTypes = {
  name: propsTypes.string,
  label: propsTypes.string,
  value: propsTypes.string,
  placeholder: propsTypes.string,
  className: propsTypes.string,
  autoComplete: propsTypes.string,
  rules: propsTypes.object,
  onChange: propsTypes.func,
};

Input.defaultProps = {
  autoComplete: "off",
};

export default Input;
