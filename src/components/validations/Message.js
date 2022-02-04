const Message = {
  required(label) {
    return `${label} is required.`;
  },
  invalid(label) {
    return `The entered ${label} is invalid.`;
  },
};

export default Message;
