import { Contact } from "../models/Contact";

export const Search=(char:string,items:Contact[])=>{
    var filterData=items.filter((item: any) =>
    item.name.toLowerCase().includes(char.toLowerCase())
    || item.phoneNumber.toLowerCase().includes(char.toLowerCase())
    )
    return filterData;
}