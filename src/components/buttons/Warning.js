import propsTypes from "prop-types";
import Spinner from "../spinner/Spinner";

const Warning = ({
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
          flex w-auto justify-center items-center bg-yellow-400 rounded-[13px] p-3 max-w-[170px] text-[#000]
          ${className}
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

Warning.propsTypes = {
  className: propsTypes.string,
  isLoading: propsTypes.bool,
  loadingSize: propsTypes.string,
  loadingColor: propsTypes.string,
  onClick: propsTypes.func,
};

Warning.defaultProps = {
  isLoading: false,
  loadingSize: 21,
  loadingColor: "inherit",
};

export default Warning;
