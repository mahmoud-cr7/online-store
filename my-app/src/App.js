import './fontawesome'
import Home from './Home/home';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import React , { Component } from 'react';
import Computer from './Computer/computer';
import Header from './header/header';
import Footer from './footer/footer';
import Login from "./Login/login"
import Register from "./register/register"
import Proudcts from './Proudcts/prod';
// import Computer from './Computer/computer';
import Laptop from './Laptop/lap'
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
        
  <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/laptop'element={<Laptop/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
    <Route path='/register'element={<Register/>}></Route>
    <Route path='/computer'element={<Computer/>}></Route>
    <Route path='/Proudcts'element={<Proudcts/>}></Route>


  </Routes>
  
        </BrowserRouter>
        </div>
   

        </div>
       
    
    );
  }
  }
 

export default App;
