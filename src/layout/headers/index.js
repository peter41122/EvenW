import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import logoImgWh from "../../assets/images/logo.png";
import logoImgBl from "../../assets/images/logo_black.png";
import Sidebar from "../sidebar";

const Header = () => {
  const lcoation = useLocation();

  const navigate = useNavigate();

  const sidebar = useRef();

  const textColor = () => {
    var color = "black";

    if (lcoation?.pathname === "/") color = "white";

    return color;
  };

  const toggleSidebar = () => {
    sidebar.current?.changeStatus();
  };

  const handleChangeRoute = (route, data) => {
    navigate(route, data);
  };

  return (
    <>
      <Sidebar ref={sidebar} />
      <header className={`${lcoation?.pathname !== "/" && "header"}`}>
        <div className="relative flex justify-between z-[10] md:h-[130px] flex items-center mx-1 sm:mx-4 md-mx-5 lg:mx-7 md:mx-20">
          {/* //my header */}
          <div>
            <IconButton
              color="inherit"
              component="span"
              onClick={() => handleChangeRoute("/")}
            >
              <img
                src={lcoation?.pathname === "/" ? logoImgWh : logoImgBl}
                width={18}
                alt=""
              />
            </IconButton>
            <span className={`text-1xl text-${textColor()}`}>Even</span>
          </div>

          <div>
            <IconButton
              color="inherit"
              component="span"
              onClick={toggleSidebar}
            >
              <MenuIcon fontSize="large" className={`text-${textColor()}`} />
            </IconButton>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
