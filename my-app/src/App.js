import './fontawesome'
import Home from './Home/home';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import { Component } from 'react';
import Computer from './Computer/computer';
// import Computer from './Computer/computer';

class App extends Component {
  render(){
    return (
      <div className="App">
        
        <BrowserRouter>
        <Home/>
        {/* <Computer/> */}
        {/* <Route exact path='' Component ={Home} />
        <Route exact path='/computer' Component ={Computer} /> */}
        </BrowserRouter>
        
       
      </div>
    );
  }
  }
 

export default App;
