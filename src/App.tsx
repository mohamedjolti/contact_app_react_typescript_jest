import React from 'react';
import logo from './logo.svg';
import {Provider} from "react-redux"
import './App.css';
import Contact from "./pages/contactlist/Contact";
import { store } from './redux';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Contact/>
    </div>
    </Provider>
  );
}

export default App;
