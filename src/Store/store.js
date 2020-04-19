//Implementing store
// we know that Entire states of the application is present in a single state.
//React Components can fetch the current state from the store. Actions are processed in the store by a reducer.

 import {createStore} from "redux";
 import searchDetailsApp from '../Reducers/CombineReducer';
 import {applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';

var store= applyMiddleware(thunk)(createStore)(searchDetailsApp)
// store can be created using createstore method
//let store= createStore(reducer)
//Reducer is passed to store and every time reducer updates the state

// getState(): This method can be used to get the current state from the store.

//dispatch(action): React components should use this method to dispatch an action whenever an event occurs within the component. This method dispatches an action and then the reducer take care of updating the state

//subscribe(listener): Used for registering the listeners

export default store;