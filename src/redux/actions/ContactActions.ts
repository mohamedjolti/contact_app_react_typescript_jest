import { GET_CONTACTS, SEARCH_CONTACTS } from "../types"
import axios from "axios";

axios.defaults.baseURL = "https://api-im.chatdaddy.tech";


//fetch contact from the API
export const fetch_contacts = () => (dispatch: any) => {
    //the acees token is in the .env.local file
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYWI4OWUyNWUtNWEyYy00NTU1LThjYjUtNTcxMTYwNmM2ZWQxIiwidXNlcm5hbWUiOiJ6b29tZGVtbzIiLCJ0ZWFtSWQiOiI0ZDhkM2ZiYi05MDliLTRjOTgtYmM4Yy1lYmFjMjFkZjY3MDciLCJ0ZWFtT3duZXIiOiJhYjg5ZTI1ZS01YTJjLTQ1NTUtOGNiNS01NzExNjA2YzZlZDEiLCJsaW1pdHMiOnsic2VhdHMiOjEsIm1lbWJlcnMiOjEwfSwidHlwZSI6MCwiY3JlYXRlZEZyb20iOjB9LCJzY29wZSI6IjExMTExMTEwMDAwMDAwMDExMTExMTEwMDEwMDAxMTAwMTAxMDEwMDExMDEwMTAxMDAxMTAxMTAxMTExMTExMTExMTAwMDAwMTAwMDAwMDAxMSIsImV4cCI6MTYyNTQ3OTI0OSwiaWF0IjoxNjI1NDc1NjQ5fQ.HxT1eydzr92GhyWscW0LByFQh-E_sW4xIGKdnmi6LVcJUdvuwBl1gj6CmFTJpgkmNOvLmA7YEoJdb7HxYUzcWQ";
    
    axios.get("/contacts").then((res: any) => {
        console.log(res.data.contacts);
        dispatch({
            type: GET_CONTACTS,
            payload: res.data.contacts
        })
    }).catch((error:any) => {
        console.log(error);
    })
}

//seach for a contact

export const serach_contact=(value:string)=>(dispatch:any)=>{
       dispatch({
           type:SEARCH_CONTACTS,
           payload:value
       })
}
