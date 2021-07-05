import { Contact } from "../models/Contact";
//search on a list of contact the contact having the name or the phone number match the char argument
export const Search = (char: string, items: Contact[]) => {
    var filterData = items.filter((item: any) =>
        item.name.toLowerCase().includes(char.toLowerCase())
        || item.phoneNumber.toLowerCase().includes(char.toLowerCase())
    )
    return filterData;
}