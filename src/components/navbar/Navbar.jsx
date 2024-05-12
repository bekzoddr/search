import React from "react";
import { useState, useEffect } from "react";
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
import logo from "../../assets/images/nav__logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import axios from "../../api";
import NavbarSearchModel from "./NavbarSearchModel";

const pages = ["Brands", "Recently Products", "Contact", "Account"];

function Navbar() {
  const wishes = useSelector((state) => state.wishlist.value);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    if (!value.trim()) return;
    axios
      .get(`/products/search?q=${value.trim()}`)
      .then((res) => {
        setData(res.data.products);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [value]);

  return (
    <AppBar
      position="fixed"
      style={{
        background:
          "linear-gradient(152.04deg, rgb(56, 54, 56) 1.732%, rgb(11, 11, 11) 27.783%)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-between",
              },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
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
              <NavLink to={"/"}>Home</NavLink>
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "poppins",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "center",
                gap: "20px",
              },
            }}
          >
            <Button
              sx={{
                my: 2,
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "left",
                display: "flex",
                transition: "all 0.5s",
                "&:hover": {
                  color: "white",
                  transition: "all 0.5s",
                },
              }}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "rgb(139, 142, 153)",
                }}
                to={"/"}
              >
                Home
              </NavLink>
            </Button>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "rgb(139, 142, 153)",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  textAlign: "left",
                  display: "flex",
                  transition: "all 0.5s",
                  "&:hover": {
                    color: "white",
                    transition: "all 0.5s",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <div className="icons">
            <div className="search">
              {" "}
              <div className="search-box">
                <button className="btn-search">
                  <SearchIcon />
                </button>
                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="input-search"
                  placeholder="Type to Search..."
                />
                {value.trim() && (
                  <NavbarSearchModel setSearchValue={searchValue} data={data} />
                )}
              </div>
            </div>
            <PersonIcon className="icon" />
            <NavLink to={"/wishlist"}>
              <Badge badgeContent={wishes.length} color="primary">
                <FavoriteBorderIcon className="icon" />
              </Badge>
            </NavLink>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
