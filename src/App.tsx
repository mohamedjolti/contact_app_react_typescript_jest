
import {Provider} from "react-redux";
import ContactList from "./pages/contactlist/ContactList";
import { store } from './redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <ContactList/>
    </div>
    </Provider>
  );
}

export default App;
