const Primary = ({ className, children }) => {
  return (
    <>
      <div
        className={`${className} w-full border bg-blue-custom text-white p-3 text-[14px]`}
      >
        {children}
      </div>
    </>
  );
};

export default Primary;
