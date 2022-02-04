import Message from "./Message";

const Validation = {
  required(label, setValidations, data) {
    setValidations((res) => ({
      ...res,
      required: { value: true, message: Message?.required(label) },
    }));
  },
  email(label, setValidations, data) {
    setValidations((res) => ({
      ...res,
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: Message?.invalid(label),
      },
    }));
  },
  url(label, setValidations, data) {
    setValidations((res) => ({
      ...res,
      pattern: {
        value:
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
        message: Message?.invalid(label),
      },
    }));
  },
  numeric(label, setValidations, data) {
    setValidations((res) => ({
      ...res,
      pattern: {
        value: /^[0-9]+$/,
        message: Message?.invalid(label),
      },
    }));
  },
  mobile(label, setValidations, data) {
    setValidations((res) => ({
      ...res,
      pattern: {
        value: /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/,
        message: Message?.invalid(label),
      },
    }));
  },
  text(label, setValidations, data) {
    setValidations((res) => ({
      ...res,
      pattern: {
        value: /^[A-Za-z]*$/,
        message: Message?.invalid(label),
      },
    }));
  },
};

export default Validation;
