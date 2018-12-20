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
    const contactData = [...this.state.contactData];
    contactData.push(input);
    this.setState({ contactData })
  }

  removeContact(index: number) {
    const contactData = [...this.state.contactData];
    contactData.splice(index, 1);
    this.setState({ contactData });
  }

  render() {
    return (
      <div className="App">
        <ContactAdder setNewContact={this.setNewContact.bind(this)}/>
        <ContactList contactData={this.state.contactData} removeContact={this.removeContact.bind(this)}/>
      </div>
    )
  }
}

export default App;
