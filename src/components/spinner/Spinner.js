import propsTypes from "prop-types";
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = ({ color, size, className, style }) => {
  return (
    <CircularProgress
      className={className}
      color={color}
      size={size}
      style={style}
    />
  );
};

Spinner.propsTypes = {
  size: propsTypes.number,
  color: propsTypes.string,
  className: propsTypes.string,
  style: propsTypes.string,
};

Spinner.defaultProps = {
  size: 10,
  color: "inherit", //["inherit","primary","secondary"]
  style: { verticalAlign: "middle" },
};

export default Spinner;
