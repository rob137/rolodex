import React, { Component } from 'react';

import ContactRow from './ContactRow';
import { ContactData, Contact, ContactKey } from './types';

interface ContactListProps {
  contactData: ContactData;
  removeContact: (index: number) => void;
  updateContact: (index: number, key: ContactKey, value: string) => void;
}

export default function ContactList(props: ContactListProps) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Position</th>
          <th>Last Contacted</th>
          <th>Notes</th>
        </tr>
        {
          props.contactData.map((contact: Contact, key) => {
            return (
              <ContactRow
                contact={contact}
                contactIndex={key}
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
