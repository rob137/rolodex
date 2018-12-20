import React, { Component } from 'react';
import './App.css';

import ContactAdder from './ContactAdder';
import ContactList from './ContactList';
import contactData from './contact-data.json';
import { ContactData, NewContact } from './types';

interface AppState {
  contactData: ContactData;
  newContact: NewContact;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { 
      contactData: contactData,
      newContact: {},
    };
  }

  setNewContact(input: NewContact) {
    console.log(input);
  }

  render() {
    return (
      <div className="App">
        <ContactAdder setNewContact={this.setNewContact.bind(this)}/>
        <ContactList contactData={this.state.contactData}/>
      </div>
    )
  }
}

export default App;
