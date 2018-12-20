import React, { Component } from 'react';

import InteractiveCell from './InteractiveCell';
import { Contact, ContactKey } from './types';

interface ContactRowProps {
  contact: Contact;
  contactIndex: number;
  updateContact: (index: number, key: ContactKey, value: string) => void;
  removeContact: (index: number) => void;
}

export default function ContactRow(props: ContactRowProps) {
  const lastContact = props.contact.lastContact && new Date(props.contact.lastContact).toDateString();
  const propNames: ContactKey[] = ['name', 'phone', 'company', 'position', 'lastContact', 'notes'];

  return (
    <tr>
      {propNames.map((propName: ContactKey, key: number) => {
        return (
          <InteractiveCell
            contactKey={propName}
            data={propName === 'lastContact' ? lastContact : props.contact[propName]}
            contactIndex={props.contactIndex}
            updateContact={props.updateContact}
            key={key}
          />
          );
      })}
      <td onClick={() => props.removeContact(props.contactIndex)}>x</td>
    </tr>
  )
}
