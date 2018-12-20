import React, { Component } from 'react';

import ContactRow from './ContactRow';
import { ContactData, Contact, ContactKey } from './types';

interface ContactListProps {
  contactData: ContactData;
  removeContact: (index: number) => void;
  updateContact: (index: number, key: ContactKey, value: string) => void;
}

export default function ContactList(props: ContactListProps) {
  const fieldNames: ContactKey[] = ['name', 'phone', 'company', 'position', 'lastContact', 'notes'];
  return (
    <table>
      <tbody>
        <tr>
          {fieldNames.map((fieldName, key) => <th key={key}>{fieldName}</th>)}
        </tr>
        {
          props.contactData.map((contact: Contact, key) => {
            return (
              <ContactRow
                contact={contact}
                contactIndex={key}
                fieldNames={fieldNames}
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
