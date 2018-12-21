import React, { Component } from 'react';
import './ContactAdder.scss';

import ContactAdderInput from './ContactAdderInput';
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
  fieldNames: ContactKey[];
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
      <form className="ContactAdder" onSubmit={(e) => {
        e.preventDefault();
        this.props.setNewContact(this.state);
        return false;
      }}>
        {this.props.fieldNames.map((fieldName: ContactKey, key: number) => {
          return (
            <ContactAdderInput
              fieldName={fieldName}
              value={this.state[fieldName]}
              handleChange={this.handleChange.bind(this)}
              key={key}
            />
          );
        })}
        <br/>
        <input type="submit"/>
      </form>
    );
  }
}
