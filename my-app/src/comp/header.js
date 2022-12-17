import React from "react";
import { link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="hide-when-mobile">
        <h1>africa store</h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/Html">
              Laptop
            </NavLink>
            <ul className="sub-ul">
              <li>
                <NavLink className="main-link" to="/Html">
                  <a href="">Samsung</a>
                </NavLink>
              </li>
              <li>
                <a href="">lenovo</a>
              </li>
              <li>
                <a href="">LG</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              Computer
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href=""> Samsung</a>
              </li>
              <li>
                <a href="">LG</a>
              </li>
              <li>
                <a href="">lenovo</a>
              </li>
              <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              Login
            </NavLink>
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1>africa store</h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/Html">
              Screen
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="">Samsung</a>
              </li>
              <li>
                <a href="">lenovo</a>
              </li>
              <li>
                <a href="">LG</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              Keyboard
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href=""> Samsung</a>
              </li>
              <li>
                <a href="">LG</a>
              </li>
              <li>
                <a href="">lenovo</a>
              </li>
              <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              playStation
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">5🔥</a>
              </li>
              <li>
                <a href="">4</a>
              </li>
              <li>
                <a href="">3</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="logo">
                              <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                           </div>
      </header>
    </>
  );
}

export default Header;
