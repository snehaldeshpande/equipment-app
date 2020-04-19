// Added search_details Reducer
// Reducers are pure functions which are responsible for handling the actions and modify the state of the application based on the action triggered.
import {combineReducers} from 'redux';
import display_details from '../Reducers/Display_details';
import Search_details from '../Reducers/Search_details';

let data1 ={name:"EquipmentA",vendor:"Mr.John",model:"101",serial:"10101",
description:"These are Details of equipmentA "}

const initialState= {
    search_details:[ ],
    display_details:[]
}

 function searchDetailsApp(state = initialState,action){

    switch (action.type){

        case search_details:{
            const{ name } = action;
            const info = state.data1.filter((name) =>
            name.includes(name));
            return{...state,name,info}
        }
        case display_details:{

        }
        default:
            return state
        }
}

export default searchDetailsApp;

