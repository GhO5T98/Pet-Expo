import React, { useContext, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PetsIcon from "@mui/icons-material/Pets";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const settings = ["Dashboard", "Logout"];

function Nav() {
  const { admin, logout } = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  const navItems = [
    { text: "Home", path: "/" },
    { text: "Pets Categories", path: "/PetCategories" },
    { text: "Gallery", path: "/Gallery" },
  ];

  const getUnderlineStyle = (path) => ({
    my: 1,
    color: "black",
    display: "block",
    mr: 2,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "60%",
      height: "3px",
      bottom: 0,
      left: "19%",
      backgroundColor: "#a9def9",
      transform: location.pathname === path ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "center",
      transition: "transform 0.6s",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PetsIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                ml: 5,
                fontSize: "2rem",
                transform: "rotate(-25deg)",
              }}
            />
            <Typography
              style={{ color: "black" }}
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pet Expo
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                {navItems.map((item) => (
                  <MenuItem key={item.text} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to={item.path}
                      >
                        {item.text}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <PetsIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                fontSize: "1.7rem",
                transform: "rotate(-25deg)",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Pet Expo
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 30 }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  disableRipple
                  onClick={handleCloseNavMenu}
                  sx={getUnderlineStyle(item.path)}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      letterSpacing: "2px",
                    }}
                    to={item.path}
                  >
                    {item.text}
                  </Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {admin ? (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        sx={{ width: "33px", height: "33px" }}
                        alt="Admin"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => {
                          handleCloseUserMenu();
                          if (setting === "Dashboard") {
                            navigate("/Dashboard"); // Navigate to dashboard
                          } else if (setting === "Logout") {
                            logout();
                          }
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          {setting === "Dashboard" && (
                            <DashboardIcon sx={{ mr: 1 }} />
                          )}
                          {setting === "Logout" && (
                            <LogoutIcon sx={{ mr: 1 }} />
                          )}
                          <Typography textAlign="center">{setting}</Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Button
                  color="inherit"
                  component={Link}
                  to="/Login"
                  endIcon={<LoginIcon />}
                  sx={{ letterSpacing: 2 }}
                >
                  Admin
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Nav;
