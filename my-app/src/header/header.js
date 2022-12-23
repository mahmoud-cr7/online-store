import React from "react";

import { link, a ,N} from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="hide-when-mobile head">
        <h1>BIS</h1>
       <a className="main-link hl" href="/Home">Home</a>
        <ul className="flex">
        <a className="  main-list main-link " href="/Laptop">
              Laptop
            </a>
          {/* <li className="main-list">
            
            <ul className="sub-ul">
              <li>
                <a className="main-link" href="/Computer">
                  <a href="">Samsung</a>
                </a>
              </li>
              <li>
                <a href="">lenovo</a>
              </li>
              <li>
                <a href="">LG</a>
              </li>
            </ul>
          </li> */}
          <a className="main-link main-list" href="/Computer">
              Computer
            </a>
          {/* <li className="main-list">
            
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
          </li> */}
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
          
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1>africa store</h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/Html">
              Screen
            </a>
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
            <a className="main-link" href="/css">
              Keyboard
            </a>
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
            <a className="main-link" href="/javascript">
              playStation
            </a>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="">5</a>
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
        
      </header>
    </div>
  );
}

export default Header;
