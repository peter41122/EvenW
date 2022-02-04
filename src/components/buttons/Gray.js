import propsTypes from "prop-types";
import Spinner from "../spinner/Spinner";

const Gray = ({
  className,
  isLoading,
  loadingSize,
  loadingColor,
  onClick,
  children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    onClick && onClick();
  };
  return (
    <>
      <a
        href="/"
        className={`
          ${className}
          flex w-auto justify-center items-center bg-gray-cu rounded-[13px] text-[14px] p-3 text-[#000]
        `}
        onClick={handleClick}
      >
        {isLoading ? (
          <Spinner color={loadingColor} size={loadingSize} />
        ) : (
          children
        )}
      </a>
    </>
  );
};

Gray.propsTypes = {
  className: propsTypes.string,
  isLoading: propsTypes.bool,
  loadingSize: propsTypes.string,
  loadingColor: propsTypes.string,
  onClick: propsTypes.func,
};

Gray.defaultProps = {
  isLoading: false,
  loadingSize: 21,
  loadingColor: "inherit",
};

export default Gray;
