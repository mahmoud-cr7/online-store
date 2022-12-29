import React from "react";
import './header.css'
import {  useState } from "react";
import TextField from "@mui/material/TextField";
import { link, a ,N, NavLink} from "react-router-dom";

function Header() {
  return (
    <div>
      <div className=" head">
       
       <div className="header">
       <h1 className="logo">BIS</h1>
        <ul >
      
        <li className="main-list">
        <a className="main-link " href="/home">
              Home
            </a>
            </li >
          <li className="main-list">
        <a className="main-link " href="/laptop">
              Laptop
            </a>
            </li >
            < li className="main-list">
          <a className="main-link " href="/computer">
              Computer
            </a>
            </li>
          <li className="main-list">
            <a className="main-link" href="/Proudcts">
              Proudcts
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Login">
              Login
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>

      </div>
    </div>
  );
}

export default Header;
