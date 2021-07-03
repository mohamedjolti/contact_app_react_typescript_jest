import { GET_CONTACTS } from "../types"

export const fetch_contacts=()=>(dispatch:any)=>{
    dispatch({
        type:GET_CONTACTS,
        payload:[]
    })
}