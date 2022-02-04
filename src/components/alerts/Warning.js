const Warning = ({ className, children }) => {
  return (
    <>
      <div
        className={`${className} w-full border bg-yellow-500 text-white p-3 text-[14px]`}
      >
        {children}
      </div>
    </>
  );
};

export default Warning;
