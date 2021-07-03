import { combineReducers } from "redux"
import { Contact } from "../../models/Contact"
import { GET_CONTACTS } from "../types";

const inistState={
    items:[],
    item:""
}


function ContactReducer(state=inistState,action:string){
         switch(action){
             case GET_CONTACTS:
                 state.items=[]
                 return {...state}
             default:
                 return state
         }
}


const contactApp=combineReducers({
    ContactReducer


})

export default contactApp;