import React , {Component} from "react";
import Header from "../header/header";
// import './lap.css'
import './lap.css';
import cardimg  from '../images/macbg.jpg';
import Footer from "../footer/footer";

class Laptop extends Component {
  render(){
    return (
        <div>
      <div className="Laptop">
        <Header/>
        <div className="h1p">
       <h1 className="headh1">LAPTOPS</h1>
        <p className="headp"> SECTION</p>
        {/* <hr className="line"/> */}
       </div>
       <div className="container">
        <div className="card">
         <div className="abear">
         <img src={cardimg}/>
          <button className="add">Add to cart</button>
         </div>
          <h3 className="h3">Mac book pro</h3>
          <p> This Store About Computers And its Accessories Lorem ipsum dolor sit
            <br/>
            amet consectetur adipisicing elit. Dolor laudantium vitae dolore</p>
          <div className="specs">
          <div className="price">price: $10000</div>
          <div className="sold">sold out</div>
          <div className="quantatiy"> the quantatiy : 20</div>
         
          </div>
        </div>
        <div className="card">
          <img src={cardimg}/>
          <h3 className="h3">Mac book</h3>
          <p> This Store About Computers And its Accessories Lorem ipsum dolor sit
            <br/>
            amet consectetur adipisicing elit. Dolor laudantium vitae dolore</p>
          <div className="specs">
          <div className="price">price: $10000</div>
          <div className="sold">sold out</div>
          <div className="quantatiy"> the quantatiy : 20</div>
          </div>
        </div>
        <div className="card">
          <img src={cardimg}/>
          <h3 className="h3">Mac book</h3>
          <p> This Store About Computers And its Accessories Lorem ipsum dolor sit
            <br/>
            amet consectetur adipisicing elit. Dolor laudantium vitae dolore</p>
          <div className="specs">
          <div className="price">price: $10000</div>
          <div className="sold">sold out</div>
          <div className="quantatiy"> the quantatiy : 20</div>
          </div>
        </div>
       </div>
     
      </div>
      <Footer/>
      </div>
    );
  }
  }
 

export default Laptop;
