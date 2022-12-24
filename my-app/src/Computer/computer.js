import React from "react";
import Header from "../header/header";
import './computer.css'
function Computer() {
  return (

    <div className="Computer">
      <Header/>
     <div className="h1+p">
     <h1 className="headh1">COMPUTER</h1>
      <p className="headp"> SECTION</p>
      <hr className="line"/>
     </div>
     <div className="container">
      <div className="card">
        <img/>
        <h3></h3>
        <p></p>
        
      </div>
     </div>
    </div>
  );
}

export default Computer;
