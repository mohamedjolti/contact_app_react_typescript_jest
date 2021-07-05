import { combineReducers } from "redux"
import { Contact } from "../../models/Contact";
import { Search } from "../../services/ContactService";
import { GET_CONTACTS, SEARCH_CONTACTS } from "../types";

const inistState = {
    items: [],
    itemsSearch:[],
    item: {}
}


function ContactReducer(state = inistState, action: any) {
    switch (action.type) {
        case GET_CONTACTS:
            return { ...state, items: action.payload ,itemsSearch:action.payload};
        case SEARCH_CONTACTS:
            
            
            return { ...state, itemsSearch:Search(action.payload,state.items) }
        default:
            return state
    }
}


const contactApp = combineReducers({
    contact: ContactReducer


})

export default contactApp;