import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
let defaultState = {todo:{}}
if(localStorage.getItem("todos")) {
  defaultState = {todo:JSON.parse(localStorage.getItem("todos"))}
}
export default function configureStore(initialState=defaultState) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}