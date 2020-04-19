import React from 'react';
//Action creators are the functions that returns the action object.
function handleDisplay(name){
    return{
        type: handleDisplay,
        name
    }
}

export default handleDisplay;