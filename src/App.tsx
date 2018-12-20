import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import ContactList from './ContactList';
import contactData from './contact-data.json';
import { ContactData } from './types';

interface AppState {
  contactData: ContactData;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { contactData: contactData };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ContactList/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
