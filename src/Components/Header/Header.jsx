import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material";
import React, { useState } from "react";
import logoImg from "../../assets/logoImg.svg";
import followImage from "../../assets/followicon.png";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from "react-scroll";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "../../css/header.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "shift")
    ) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = ({ anchor }) => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <List>
          {nav_title_mobile.map((item, index) => {
            return (
              <ListItem key={item.index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <HomeIcon />}
                    {index === 1 && <FeaturedPlayListIcon />}
                    {index === 2 && <MiscellaneousServicesIcon />}
                    {index === 3 && <ContactsIcon />}
                    {index === 4 && <PersonAddIcon />}
                  </ListItemIcon>
                  <Link key={index} to={item.path} smooth={true} duration={500}>
                  <ListItemText primary={item.display} />
                  </Link>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  };

  

  const nav_title = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "service",
      display: "Services",
    },
    {
      path: "aboutUs",
      display: "About Us",
    },
    {
      path: "discover",
      display: "Add a store",
    },
  ];

  const nav_title_mobile = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "service",
      display: "Services",
    },
    {
      path: "aboutUs",
      display: "About Us",
    },
    {
      path: "discover",
      display: "Add a store",
    },
    {
      path:'gettouch',
      display: "Follow us"
    }
  ];

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "initial",
    gap: "38px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavBarLink = styled(Typography)(() => ({
    fontSize: "13px",
    fontWeight: "700",
    position: "relative",
    lineHeight: "normal",
    fontFamily: "Inter",
    cursor: "pointer",
    fontStyle: "normal",
    color: "#FFF",
    "&:hover::before": {
      fontSize: "33px",
      fontWeight: "10000",
      content: '""',
      position: "absolute",
      width: "61px",
      height: "3px",
      marginTop: "33px",
      marginLeft: "-7px",
      flexShrink: 0,
      borderRadius: "12px 12px 0px 0px",
      background: "#FFF",
    },
    "&:hover": {
      '&:contains("Add a store")': {
        "&::before": {
          width: "84px",
          height: "3px",
        },
      },
      '&:contains("About Us")': {
        "&::before": {
          width: "100px",
        },
      },
      '&:contains("Follow Us on")': {
        "&::before": {
          width: "120px",
        },
      },
    },
  }));
  const FollowIcon = styled("img")(() => ({
    width: "9px",
    height: "9px",
    flexShrink: "0",
    position: "relative",
    zIndex: 1,
  }));

  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "115px",
    height: "35px",
    display: "block",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      display: (props) => (props.mobileMenu ? "none" : "block"),
    },
  }));
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    color: "white",
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginLeft:"auto",
    },
  }));
  return (
    
    <div className="header-main-div">
      <div className="header-content-left">
        <div className="header-content-left-drawer-div">
          {" "}
          <Drawer
            anchor="right"
            open={mobileMenu["right"]}
            onClose={toggleDrawer("right", false)}
            style={{width:"200px"}}
          >
          <div style={{ textAlign: 'right', padding: '10px' }}>
              <IconButton onClick={toggleDrawer("right", false)}>
                <CloseIcon />
              </IconButton>
              </div>
            {list("right")}
            
          </Drawer>
          <Link to="home" smooth={true} duration={500}>
          <NavBarLogo src={logoImg} mobileMenu={mobileMenu.right} />
          </Link>
          
        </div>

        <NavBarLinksBox>
        {nav_title.map((item, index) => (
          <Link key={index} to={item.path} smooth={true} duration={500}>
            <NavBarLink>{item.display}</NavBarLink>
          </Link>
        ))}
        </NavBarLinksBox>
      </div>

      <div className="header-content-right">
        <FollowIcon src={followImage} />
        <Link to="gettouch" smooth={true} duration={500}> {/* Link to the "followUs" Element */}
          <NavBarLink>Follow us on</NavBarLink>
        </Link>
      </div>
      <CustomMenuIcon onClick={toggleDrawer("right", true)} />
      

    </div>


    
    
    

  
  );
};

export default Header;
