import React from 'react'
import './Card.css'
import { Container} from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'

class Card1 extends React.Component{

render(){
    return(
      <div className="image" style={{display:"inline-block"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu7Ki2uNad5ME1jv_3340yeDX8-8_A64SGTqq4AuwQ1wHkYUlP&usqp=CAU" alt="Image"></img>

      {/* //   {/* <Figure>
      //   <Figure.Image
      //     width={300}
      //     height={300}
      //     alt="Image"
      //     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu7Ki2uNad5ME1jv_3340yeDX8-8_A64SGTqq4AuwQ1wHkYUlP&usqp=CAU"
      //   />
        
      // </Figure>  */}
      
      </div>
    )
}
}


export default Card1;