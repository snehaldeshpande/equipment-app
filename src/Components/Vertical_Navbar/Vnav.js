import React from 'react'

import './Vnav.css'

class Vnav extends React.Component{

render(){
    return(
        <div class="icon-bar">
        <a class="active" href="#"><i class="fa fa-home"></i></a> 
        <a href="#"><i class="fa fa-search"></i></a> 
        <a href="#"><i class="fa fa-envelope"></i></a> 
        <a href="#"><i class="fa fa-globe"></i></a>
        <a href="#"><i class="fa fa-trash"></i></a> 
      </div>
    )
}
}


export default Vnav;