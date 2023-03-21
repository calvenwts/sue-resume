import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Drawer, List, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const pagesMobile = [
  { name: "Interior", path: "interior" },
  { name: "Graphic", path: "graphic" },
  { name: "Photography", path: "photography" },
];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setAnchorElNav(null);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        {pagesMobile.map((text, index) => (
          <Link
            to={`/${text.path}`}
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={text.name}
          >
            <span>{text.name}</span>
          </Link>
        ))}
      </List>
    </Box>
  );

  const multiDropdown = () => (
    <>
      <div
        className="nav-font"
        style={{ color: "black" }}
        onClick={handleClick}
      >
        PROJECT
      </div>
      <Menu
        className="nav-dropdown"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link
          to={`/interior`}
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "Grotesque",
          }}
          key={"interior"}
        >
          <MenuItem onClick={handleClose}>Interior</MenuItem>
        </Link>
        <Link
          to={`/graphic`}
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "Grotesque",
          }}
          key={"graphic"}
        >
          <MenuItem onClick={handleClose}>Graphic</MenuItem>
        </Link>
        <Link
          to={`/photography`}
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "Grotesque",
          }}
          key={"photography"}
        >
          <MenuItem onClick={handleClose}>Photography</MenuItem>
        </Link>
      </Menu>
    </>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div className="font-title-1">Sue Cheok</div>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              // color="inherit"
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
              anchor="right"
              open={Boolean(anchorElNav)}
              onClose={toggleDrawer()}
            >
              {list()}
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {multiDropdown()}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
