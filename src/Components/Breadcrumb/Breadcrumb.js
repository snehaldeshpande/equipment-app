import React from 'react';
import { Breadcrumb} from 'react-bootstrap';


class Breadc extends React.Component{
  
  render(){
  return(
    <div>
   <Breadcrumb>
   <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="http://localhost:3000/Equipmwnt1 ">
     Device Name
    </Breadcrumb.Item>
    <Breadcrumb.Item href="http://localhost:3000/Equipmwnt1 ">Equipment A</Breadcrumb.Item>
   </Breadcrumb>


   </div>
  )
    
  }
}


export default Breadc;

// const Breadc =({children, ...props})=>{
// return<div>
//   <li className="breadcrumb-items" {...props}>
//   {children}
//   </li>
//   </div>
// }
  
  

