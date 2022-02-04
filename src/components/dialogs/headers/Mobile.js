import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MobileHeader = ({ title, backPress }) => {
  const handleBack = () => {
    backPress();
  };

  return (
    <Box className="mb-[4rem]" sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#f8f9fb", boxShadow: "0 0 2px 2px #f8f9fb" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleBack}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#000" }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MobileHeader;
