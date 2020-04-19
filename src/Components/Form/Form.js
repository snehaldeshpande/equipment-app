import React from 'react';
import './Form.css';
import { Container,Row,Col,Card,ListGroup,Button,Form} from 'react-bootstrap';

class Form1 extends React.Component{

    render(){
        return(
        
           // <div style={{width: '50rem',marginTop:"10px" }}>
                //<div className="form" style={{display:"inline-block"}}>
            <Form  style={{width:"50rem"}}>
            
           < Form.Group controlId="formGroupEmail">
            <Form.Label>Eqipment Name</Form.Label>
            <Form.Control type="text"/>
            </Form.Group>
            
            <Form.Group >
            <Form.Label>Location</Form.Label>
            <Form.Control type="text"/>
            </Form.Group>

            
            <Form.Group >
            <Form.Label>Model</Form.Label>
            <Form.Control type="number"/>
            </Form.Group>

            <Form.Group controlId="formGroupEmail">
            <Form.Label>Vendor Name</Form.Label>
            <Form.Control type="text"/>
            </Form.Group>
  
  
            <Form.Group >
            <Form.Label>Serial</Form.Label>
            <Form.Control type="number"/>
            </Form.Group>
  
            <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text"/>
            </Form.Group>
      
            </Form>
           // </div>
            //</div>
        )
    }
}
export default Form1;


//  States in application

// {
//     search_reasults:[
//         {
//             image:"url"
//         },
//         {
//              text:"Vendor_name"
//        },
//        {
//            text:"Location"
//        },
//        {
//            text:"model"
//        },
//       {
//           text:"description"
//       }

// ]
// }

// Action creators

// { 
//     type:"SEARCH",
//     value:model
// }


//Action creator function

//function handleSearch(model){
//     {
//         return{
//             type: SEARCH,
//             model
//         }
//     }
// }