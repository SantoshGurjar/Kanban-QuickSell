import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Menu = () => {
  const handleIconClick = () => {
    alert("More Button: Not Needed for now!");
  };

  return (
    <IconButton onClick={handleIconClick}>
      <MoreHorizIcon style={{ fontSize: 18 }} />
    </IconButton>
  );
};

export default Menu;
