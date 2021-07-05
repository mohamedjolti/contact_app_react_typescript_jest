export interface Contact{
    id:number;
    type:string;
    email:string;
    name:string;
    phoneNumber:string;
    messagesSent:number;
    messaghesReceived:number;
    assignee:string;
    tags:[];
    chats:[];
}