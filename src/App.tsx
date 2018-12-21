import React, { Component } from 'react';
import './App.scss';

import ContactAdder from './ContactAdder';
import ContactList from './ContactList';
import contactData from './contact-data.json';
import { ContactData, NewContact, ContactKey } from './types';

interface AppState {
  contactData: ContactData;
  newContact: NewContact;
}

export const formatDate = (input?: string) => {
  if (!input || isNaN(Date.parse(input))) {
    return '';
  }
  // To do: default to current year (currently '10 jan' will return 10 Jan 2001)
  return new Date(input).toDateString();
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { 
      contactData: contactData,
      newContact: {},
    };
  }

  setNewContact(input: NewContact) {
    const contactData = [...this.state.contactData];
    input.lastContact = formatDate(input.lastContact);
    contactData.push(input);
    this.setState({ contactData })
  }

  updateContact(index: number, key: ContactKey, value: string) {
    const contactData = [...this.state.contactData];
    contactData[index][key] = key === 'lastContact' ? formatDate(value) : value;
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
