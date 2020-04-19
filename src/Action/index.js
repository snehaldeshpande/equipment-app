 
//Added Action creator
//Action is a JavaScript object which describes an event. 


let name="EquipmentA";

export const searchResult = (name)=>(
    { 
        type:'SEARCH',
         name

    },{
        type:"DISPLAY",
        name
    })



