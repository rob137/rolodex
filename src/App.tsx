import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import ContactList from './ContactList';

interface AppState {
  ContactData?: any;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { ContactData: undefined };
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
