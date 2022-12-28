import React , { Component } from 'react';
import Sidebar from '../components/Sidebar';
import MainDash from '../components/MainDash/MainDash';
import RightSide from '../components/RightSide/RightSide';
import './AdminArea.css'
class AdminArea extends Component {
 
    render(){
     
  
      return (
        <div className='app'>
        <Sidebar/>
        <MainDash/>
        <RightSide/> 
          
       
          </div>
         
      
      );
    }
    }
   
  
  export default AdminArea;
  