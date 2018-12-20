import React, { Component } from 'react';

import ContactRow from './ContactRow';
import { ContactData } from './types';

interface ContactListProps {
  contactData: ContactData;
}

export default function ContactList(props: ContactListProps) {
  return (
    <table>
      <tbody>
        <ContactRow/>
      </tbody>
    </table>
  )
}
