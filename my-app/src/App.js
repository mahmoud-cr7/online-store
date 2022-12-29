import './fontawesome'
import Home from './Home/home';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import React , { Component } from 'react';
import Computer from './Computer/computer';
import Header from './header/header';
// import Computer from './Computer/computer';
import Laptop from './Laptop/lap'
import Register from './register/register';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar';
import './App.css'
import AdminArea from './AdminArea/AdminArea';
class App extends Component {
 
  render(){
   

    return (
      <div>
      <div className="App">
        
        <BrowserRouter>
    {/* <Home></Home> */}
    {/* <Computer/> */}
      <AdminArea/>
        </BrowserRouter>
        </div>
   

        </div>
       
    
    );
  }
  }
 

export default App;
