import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg";
import {HiOutlineBars3} from "react-icons/hi2";
import {
  Box,
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from 'react-scroll';

export const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon/>
    },
    {
      text: "About",
      icon: <InfoIcon/>
    },
    {
      text: "Purpose",
      icon: <CommentRoundedIcon/>
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon/>
    }
  ]

  return (
    <nav>
      <div className='nav-logo-container'>
        <img src ={Logo} alt = "alt" />
      </div>
      <div className='navbar-links-container'>
        <Link to='' spy={true} smooth={true} duration={1000}>Home</Link>
        <Link to='about' spy={true} smooth={true} duration={500}>About</Link>
        <Link to='purpose' spy={true} smooth={true} duration={500}>Purpose</Link>
        <Link to='contact' spy={true} smooth={true} duration={1000}>Contact</Link>
        <Link to='https://x.com/cybernurture?t=TZT-zgQzKJq0IRMlSWesPw&s=09'><button className='primary-button'>Join Here</button></Link>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box sx={{width: 250}}
        role = "presentation"
        onClick={() => setOpenMenu(false)}
        onkeydown={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((item) =>(
                <ListItem key ={item.text} disablePadding >
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
};

export default Navbar
