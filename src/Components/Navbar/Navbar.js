import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,FormControl } from 'react-bootstrap';
import Searchbar1 from '../Searchbar/Searchbar';
 
class Navbar1 extends React.Component{
    render(){
        return(

         <React.Fragment>
        <Navbar style={{backgroundColor:"#4B0082"}}>
       
       <Navbar.Brand href="#lab" style={{color:"white"}}>Lab</Navbar.Brand>
      <Searchbar1/>
      <Nav className="mr-auto">
      
      <Nav.Link href="#questions"><i  style={{color:"white"}}class="fa fa-question-circle"></i> </Nav.Link>
      <Nav.Link href="#features"><i style={{color:"white"}}class="fa fa-bell"></i></Nav.Link>
      <Nav.Link href="#pricing"><i style={{color:"white"}} class="fa fa-user-circle"></i></Nav.Link>
    </Nav>

  </Navbar>
            </React.Fragment>
        )
    }
}

export default Navbar1;
