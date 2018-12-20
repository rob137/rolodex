import React, { Component } from 'react';

import { NewContact, ContactKey } from './types';

interface ContactAdderState {
  name: string;
  phone: string;
  company: string;
  position: string;
  lastContact: string;
  notes: string;
}

interface ContactAdderProps {
  setNewContact: (input: NewContact) => void;
}

export default class ContactAdder extends Component<ContactAdderProps, ContactAdderState> {
  constructor(props: ContactAdderProps) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      company: '',
      position: '',
      lastContact: '',
      notes: '',
    };
  }

  handleChange(fieldName: ContactKey, input: string) {
    this.setState({ [fieldName]: input } as any);
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.setNewContact(this.state);
        return false;
      }}>
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.name as ContactKey, e.target.value)}
          value={this.state.name}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.name as ContactKey, e.target.value)}
          value={this.state.phone}
          name="phone"
          placeholder="Phone"
        />
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.name as ContactKey, e.target.value)}
          value={this.state.company}
          name="company"
          placeholder="Company"
        />
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.name as ContactKey, e.target.value)}
          value={this.state.position}
          name="position"
          placeholder="Position"
        />
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.name as ContactKey, e.target.value)}
          value={this.state.lastContact}
          name="lastContact"
          placeholder="Last contacted"
        />
        <input
          type="text"
          onChange={(e) => this.handleChange(e.target.name as ContactKey, e.target.value)}
          value={this.state.notes}
          name="notes"
          placeholder="Notes"
        />
        <input type="submit"/>
      </form>
    );
  }
}
