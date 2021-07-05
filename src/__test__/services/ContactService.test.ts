import { exception } from "console";
import { Contact } from "../../models/Contact";
import { Search } from "../../services/ContactService";

// test the search function
test("test searching a contact", () => {
    //creating a list of contacts
    const items: Contact[] = [
        {
            id: 1,
            name: 'test1',
            email: 'email2',
            phoneNumber: '123',
            messagesSent: 0,
            messaghesReceived: 100,
            assignee: "assignee test",
            tags: [],
            type: "",
            chats: []
        },
        {
            id: 1,
            name: 'test2',
            email: 'email2',
            phoneNumber: '456',
            messagesSent: 0,
            messaghesReceived: 100,
            assignee: "assignee test",
            tags: [],
            type: "",
            chats: []
        }
    ];
    //test if the exepected object is the same as the result return by the search function
    expect(Search("test1", items)).toEqual(
        [{
            id: 1,
            name: 'test1',
            email: 'email2',
            phoneNumber: '123',
            messagesSent: 0,
            messaghesReceived: 100,
            assignee: "assignee test",
            tags: [],
            type: "",
            chats: []
        }]
    );
})