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
      <div className="App">
        
        <BrowserRouter>
    <Home></Home>
        {/* <Computer/> */}
        {/* <Route exact path='' Component ={Home} />
        <Route exact path='/computer' Component ={Computer} /> */}
        </BrowserRouter>
        </div>
   

       
    
    );
  }
  }
 

export default App;
