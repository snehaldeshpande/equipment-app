import React from 'react';
import './App.css';
import Navbar1 from './Components/Navbar/Navbar';
import Breadc from './Components/Breadcrumb/Breadcrumb';
import Banner from "./Components/Banner/Banner";

// import { BrowserRouter as Router,Link,Switch,Route } from 'react-router-dom'
// import Home from './Components/Home/Home';
// import Device from './Components/Home/Device'
// import EquipmentA from './Components/Home/EquipmentA'




class App extends React.Component{
  
  render(){
  return(
    <div className="app">
      <Navbar1/>
     
       <Breadc/>
  
       
       
        <Banner/>
    

       </div>
  )
    
  }
}


export default App;
