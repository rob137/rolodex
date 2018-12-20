import React, { Component } from 'react';

import ContactRow from './ContactRow';
import { ContactData, Contact, ContactKey } from './types';

interface ContactListProps {
  contactData: ContactData;
  fieldNames: ContactKey[];
  removeContact: (index: number) => void;
  updateContact: (index: number, key: ContactKey, value: string) => void;
}

export default function ContactList(props: ContactListProps) {
  return (
    <table>
      <tbody>
        <tr>
          {props.fieldNames.map((fieldName, key) => <th key={key}>{fieldName}</th>)}
        </tr>
        {
          props.contactData.map((contact: Contact, key) => {
            return (
              <ContactRow
                contact={contact}
                contactIndex={key}
                fieldNames={props.fieldNames}
                key={key}
                updateContact={props.updateContact}
                removeContact={props.removeContact}
              />
            );
          })
        }
      </tbody>
    </table>
  )
}
