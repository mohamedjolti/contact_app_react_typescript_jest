import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store';
import ContactList from '../../pages/contactlist/ContactList';
import '../../setupTests';

let store: any;
describe('ContactList test', () => {
    beforeEach(() => {
        const mockStore = configureStore();

        store = mockStore({

            contact: {

                items: [
                    {
                        name: 'test name',
                        email: 'test email',
                        phoneNumber: 'test phone number',
                        messagesSent: 0,
                        messaghesReceived: 100,
                        assignee: "assignee test",
                        tags: [],
                        chats: [] 
                    }
                ]
            } 
        }
        )
    })

    it('should render the component Contact list from store', () => {
        const wrapper = shallow(<ContactList store={store} />)
        expect(wrapper).not.toBe(null)
    })
})