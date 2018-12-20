import React, { Component } from 'react';
import './App.css';

import ContactAdder from './ContactAdder';
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
        <ContactAdder/>
        <ContactList contactData={this.state.contactData}/>
      </div>
    )
  }
}

export default App;
