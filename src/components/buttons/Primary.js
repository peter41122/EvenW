import propsTypes from "prop-types";
import Spinner from "../spinner/Spinner";

const Primary = ({
  className,
  isLoading,
  loadingSize,
  loadingColor,
  onClick,
  children,
}) => {
  const handleClick = (e) => {
    e.preventDefault();

    if (!isLoading && onClick) onClick();
  };
  return (
    <>
      <a
        href="/"
        className={`
          ${className}
          flex w-auto justify-center items-center bg-blue-custom rounded-full text-[14px] p-3 text-white
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

Primary.propsTypes = {
  className: propsTypes.string,
  isLoading: propsTypes.bool,
  loadingSize: propsTypes.string,
  loadingColor: propsTypes.string,
  onClick: propsTypes.func,
};

Primary.defaultProps = {
  isLoading: false,
  loadingSize: 21,
  loadingColor: "inherit",
};

export default Primary;
