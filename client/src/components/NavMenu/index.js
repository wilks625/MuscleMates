import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import UserProfile from "../../pages/UserProfile";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <MenuItem onClick={handleClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/UserProfile">
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/matches">
            My Matches
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/UpdateProfile">
            Update Profile
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            onClick={() => Auth.logout()}
            component={Link}
            to="/"
          >
            Logout
          </MenuItem>
        </div>
      );
    } else {
      return (
        <div>
          <MenuItem onClick={handleClose} component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/login">
            Login
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/signup">
            Sign Up
          </MenuItem>
        </div>
      );
    }
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon style={{ color: "white" }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {showNavigation()}
      </Menu>
    </div>
  );
}
