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
        {
          props.contactData.map((contact: Contact) => {
            return <ContactRow contact={contact}/>
          })
        }
      </tbody>
    </table>
  )
}
