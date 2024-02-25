import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../assets/images/unnamed.jpg";
import "./navbar.css";

const imageStyle = {
  height: "139px",
  width: "auto",
  // Mobile-specific styles
};

const pages = [
  { name: "Home", path: "/" },
  { name: "Our Mission", path: "/mission" },
  { name: "About", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

// ... (previous imports)

// ... (previous imports)

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Center both the icon and the logo */}
          <div className="centeredContainer">
            {/* Logo */}
            <div className="logoContainer">
              <Link
                className="logoStyle"
                to="/"
                style={{ textDecoration: "none" }}
              >
                <img
                  className="logoImage"
                  style={imageStyle}
                  src={Logo}
                  alt="Nothing"
                />
              </Link>
            </div>

            {/* Mobile Menu (float to right on mobile) */}
            <div className="mobileIcons">
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexDirection: "column", // Stack items vertically
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      color: "black",

                      // Set the color of the bars to black
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link to={page.path} style={{ textDecoration: "none" }}>
                          {page.name}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </div>
          </div>

          {/* Desktop Links Centered */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Right-aligned Section (optional, e.g., user menu) */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
