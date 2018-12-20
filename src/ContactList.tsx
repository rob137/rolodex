import React, { Component } from 'react';

import ContactRow from './ContactRow';
import { ContactData, Contact } from './types';

interface ContactListProps {
  contactData: ContactData;
}

export default function ContactList(props: ContactListProps) {
  return (
    <table>
      <tbody>
        <tr>
          <th/>
          <th>Name</th>
          <th>Phone</th>
          <th>Company</th>
          <th>Position</th>
          <th>Status</th>
          <th>Last Contacted</th>
          <th>Notes</th>
        </tr>
        {
          props.contactData.map((contact: Contact, key) => {
            return <ContactRow contact={contact} key={key}/>
          })
        }
      </tbody>
    </table>
  )
}
