import React, { Component } from 'react';

interface ContactAdderState {
  name: string;
  phone: string;
  company: string;
  position: string;
  lastContact: string;
  notes: string;
}

export default class ContactAdder extends Component {
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

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        return false;
      }}>
        <input type="text" name="name"   placeholder="Name"/>
        <input type="text" name="phone"  placeholder="Phone"/>
        <input type="text" name="company"  placeholder="Company"/>
        <input type="text" name="position"   placeholder="Position"/>
        <input type="text" name="lastContact"  placeholder="Last contacted"/>
        <input type="text" name="notes" placeholder="Notes"/>
        <input type="submit"/>
      </form>
    );
  }
}

/* 
On submitting, I want the form to clear and all the props to be saved in a new row at the bottom of the table 
*/