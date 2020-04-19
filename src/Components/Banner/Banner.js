import React from "react"
import './Banner.css';
import Form1 from "../Form/Form";
import Card1 from "../Card/Card";
import Equilist from "../EquipmentList/Equilist"
import { Container,Row,Col,Button,Form,Jumbotron, Card} from 'react-bootstrap';
import Vnav from "../Vertical_Navbar/Vnav";


class Banner extends React.Component{
    render(){
        return(
         <div className="maincontainer">

           <Form style={{width:"100%"}}>
           <div className="form-group" >
           <input class="form-control" placeholder="Edquipment Details" id="inputdefault"type="text">
          
           </input>
          </div>
         </Form>
         <br/> 

           <div className="row">
             <div className="icon-bar" style={{width:"35px",margin:"0",backgroundColor:"#FFFFFF",outline:"#000000",height:"500px"}}>
            <a style={{textAlign:"center",fontSize:"15px",padding:"4px", color: "black"}} href="#"><i class="fa fa-home"></i></a> 
            <a style={{textAlign:"center",fontSize:"15px",padding:"4px", color: "black"}}href="#"><i class="fa fa-file-text"></i></a> 
           <a style={{textAlign:"center",fontSize:"15px",padding:"4px", color: "black"}}href="#"><i class="fa fa-exclamation-triangle"></i></a> 
           </div>

         

 
           <Card1/>
           <div className="subrow" style={{display:"flex"}}>
           <Form1/>
           
               <Equilist/>

         
 
               
            
         </div>
         </div>
        </div>
 
        )
    }
}
export default Banner;


   {/* <Container className="heading">
                <Row>
       <Col ><b>Equipment Information</b></Col>
       </Row>
      </Container> */}