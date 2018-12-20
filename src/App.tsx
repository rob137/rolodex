import React, { Component } from 'react';
import './App.css';

import ContactAdder from './ContactAdder';
import ContactList from './ContactList';
import contactData from './contact-data.json';
import { ContactData, NewContact, ContactKey } from './types';

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

  validateDate(input?: string) {
    if (!input || isNaN(Date.parse(input))) {
      return '';
    }
    return new Date(input).toDateString();
  }

  setNewContact(input: NewContact) {
    const contactData = [...this.state.contactData];
    input.lastContact = this.validateDate(input.lastContact);
    contactData.push(input);
    this.setState({ contactData })
  }

  updateContact(index: number, key: ContactKey, value: string) {
    const contactData = [...this.state.contactData];
    this.setState({ contactData });
  }

  removeContact(index: number) {
    const contactData = [...this.state.contactData];
    contactData.splice(index, 1);
    this.setState({ contactData });
  }

  render() {
    const fieldNames: ContactKey[] = ['name', 'phone', 'company', 'position', 'lastContact', 'notes'];
    return (
      <div className="App">
        <ContactAdder fieldNames={fieldNames} setNewContact={this.setNewContact.bind(this)}/>
        <ContactList
          fieldNames={fieldNames}
          contactData={this.state.contactData}
          updateContact={this.updateContact.bind(this)}
          removeContact={this.removeContact.bind(this)}
        />
      </div>
    )
  }
}

export default App;
