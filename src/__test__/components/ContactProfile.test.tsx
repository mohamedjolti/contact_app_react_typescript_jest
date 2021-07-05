import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import { Contact } from '../../models/Contact';
import ContactProfile from '../../pages/contactlist/ContactProfile';
import '../../setupTests';

describe('ContactProfile test', () => {
     
    const contact:Contact=     {
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
    };

    it('should render the component Contact list from store', () => {
        const wrapper = shallow(<ContactProfile contact={contact} />)
        expect(wrapper).not.toBe(null)
    })
})