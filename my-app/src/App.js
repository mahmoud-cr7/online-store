import './fontawesome'
import Home from './Home/home';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import React , { Component } from 'react';
import Computer from './Computer/computer';
import Header from './header/header';
// import Computer from './Computer/computer';
import Laptop from './Laptop/lap'
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className='App'>
       
          {/* <Laptop/> */}
          <Computer/>
          {/* <Header/> */}
          {/* <Home/> */}
        </div>
      </BrowserRouter>

       
    
    );
  }
  }
 

export default App;
