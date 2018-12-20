import React, { Component } from 'react';

import { ContactKey } from './types';

interface ContactAdderState {
  name: string;
  phone: string;
  company: string;
  position: string;
  lastContact: string;
  notes: string;
}

export default class ContactAdder extends Component<{}, ContactAdderState> {
  constructor(props: {}) {
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

/* 
On submitting, I want the form to clear and all the props to be saved in a new row at the bottom of the table 
*/