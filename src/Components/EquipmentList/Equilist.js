 import React from 'react'
import "./Equilist.css"
import { ListGroup} from 'react-bootstrap';

class Equilist extends React.Component{
  constructor(props){
    super(props);
    
  }

  

 

    render(){
    

        return(
          <div className=" listgroup">
         
<div>
<ListGroup>
<ListGroup.Item style={{backgroundColor:"	#20B2AA",textAlign:"center",fontSize:"20px"}}><a  style= {{color:"#FFFFFF"}} href="System">System</a></ListGroup.Item>
  <ListGroup.Item id="list1"onClick="openList1()" style={{backgroundColor:"#9933FF",textAlign:"center",fontSize:"20px"}}><a style={{color:"#FFFFFF"}}href ="Device Name">Device name</a></ListGroup.Item>

  <ListGroup.Item id="ollist" style={{textAlign:"center",fontSize:"20px"}}><a style={{color:"#000000"}}href="Equipmwnt1">Equipment1</a></ListGroup.Item>
  <ListGroup.Item style={{textAlign:"center",fontSize:"20px"}}><a style={{color:"#000000"}}href="Equipmwnt2">Equipment2</a></ListGroup.Item>
  <ListGroup.Item style={{textAlign:"center",fontSize:"20px"}}><a style={{color:"#000000"}}href="Equipment3">Equipment3</a></ListGroup.Item>
  <ListGroup.Item style={{textAlign:"center",fontSize:"20px"}}><a style={{color:"#000000"}}href="Equipment4">Equipment4</a></ListGroup.Item>
  <ListGroup.Item style={{textAlign:"center",fontSize:"20px"}}><a style={{color:"#000000"}}href="Equipment5">Equipment5</a></ListGroup.Item>
  <ListGroup.Item style={{textAlign:"center",fontSize:"20px"}}><a style={{color:"#000000"}}href="Equipment6">Equipment6</a></ListGroup.Item>
</ListGroup>
</div>
</div>
        )
    }

}
export default Equilist;


// import React from 'react';
// import "./Equilist.css";
// import { ListGroup} from 'react-bootstrap';
// import { render } from '@testing-library/react';


// class Equilist extends React.Component{
//   constructor(props){
//     super(props)
//   }
// componentDidMount(){
//   this.state={
//     show: false
//   }
// }
// showList(){
//   this.setState({
//     show:true
//   })
// }


// render(){
//   {
//     this.state.show &&
//     <table className="table">
//        <thead>
//            <tr>
//               <th>EmployeeID</th>
//               <th>FirstName</th>
//               <th>LastName</th>
//               <th>Gender</th>               
//            </tr>
//        </thead>
//         <tbody>
//             {rows}
//         </tbody>
//     </table>
//   }
//   return(
//     <div>
// <table/>
//       </div>
//   )
// }
// }

// export default Equilist;