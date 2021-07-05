import { combineReducers } from "redux"
import { Contact } from "../../models/Contact";
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
            var filtredData = state.items.filter((item: any) =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
                || item.phoneNumber.toLowerCase().includes(action.payload.toLowerCase())
            )

            return { ...state, itemsSearch: filtredData }
        default:
            return state
    }
}


const contactApp = combineReducers({
    contact: ContactReducer


})

export default contactApp;