import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className="NavBar__appbar">
        <NavLink to="/track/browse" className="NavBar__browselink">
          Browse
        </NavLink>
        <NavLink
          to="/track/mytracks/completed"
          style={{ marginLeft: 72 }}
          className="NavBar__tracklink"
        >
          My Tracks
        </NavLink>
        <span className="NavBar__spacing"></span>
        <Avatar
          className="NavBar__avatar"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        />
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          {" "}
          <ExpandMoreIcon />
        </Button>
        <Menu
          style={{
            fontFamily: "Montserrat",
            marginTop: 50,
          }}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Completed roadmaps</MenuItem>
          <MenuItem onClick={handleClose}>Create a map</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </nav>
    </>
  );
}

export default NavBar;
