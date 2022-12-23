
// import About from "../About/About";
import theimage from "../images/pc.png";
import React from 'react';
import "./home.css"
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Footer from "../footer/footer";
import Header from "../header/header";
function Home() {
  return (<div>
    <Header/>
    <div className="Home">
      <div className="welcome">
        <h1>WELCOME TO OUR STORE</h1>
        <p>
          This Store About Computers And its Accessories Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolor laudantium vitae dolore
        </p>
      </div>
      <div>
        <img src={theimage} alt="body" className="img1"></img>
      </div>
    
    </div>
   <div className="features">
   <div className="brief">
      
      <div className="comp">
      <FontAwesomeIcon icon="computer" className="icon" />
      <h3> Computers section</h3>
      <p>
    this section about computer 
    with all its connections and types
   </p>
      </div>
      <div className="lap">
      <FontAwesomeIcon icon="laptop" className="icon"/> 
      <h3> Laptop section</h3>
  
           <p>
    this section about Laptop 
    with all its connections and types
   </p>
      </div>
      <div className="mouse">
      <FontAwesomeIcon icon="fa-keyboard" className="icon" />
      
            <h3> Proudcts section</h3>

                         <p>
        this section about some Accessories
        for the devices and 
      </p>
      </div>
     </div>
   </div>
    {/* <About/> */}
    <Footer/>
    </div>
  );
}

export default Home;
