import React, { Component } from 'react';

import InteractiveCell from './InteractiveCell';
import { Contact, ContactKey } from './types';

interface ContactRowProps {
  contact: Contact;
  contactIndex: number;
  fieldNames: ContactKey[];
  updateContact: (index: number, key: ContactKey, value: string) => void;
  removeContact: (index: number) => void;
}

export default function ContactRow(props: ContactRowProps) {
  const lastContact = props.contact.lastContact && new Date(props.contact.lastContact).toDateString();

  return (
    <tr>
      {fieldNames.map((fieldName: ContactKey, key: number) => {
        return (
          <InteractiveCell
            fieldName={fieldName}
            data={fieldName === 'lastContact' ? lastContact : props.contact[fieldName]}
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
