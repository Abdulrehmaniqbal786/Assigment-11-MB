import { AppBar,Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from '../assets/log.jpg'
import { Link } from "react-router-dom";
 const Navbar = () => {
  return (<div className="home">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img width={100} src={logo} alt="" />
        </Typography>
<div className="space-x-11">
        <Link to="/">HOME</Link>

        <Link to="/about">About</Link>

        <Link to="blog">Blog</Link>
        </div>
      </Toolbar>
    </AppBar>


    </div>

  );
};
export {Navbar};