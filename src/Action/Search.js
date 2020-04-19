import React from 'react'

//Action creators are the functions that returns the action object.
function handleSearch(name){
    return{
        type: SEARCH,
        name
    }
}
 export default handleSearch;