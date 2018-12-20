import React, { Component } from 'react';

import { Contact } from './types';

interface ContactRowProps {
  contact: Contact;
  contactIndex: number;
  removeContact: (index: number) => void;
}

export default function ContactRow(props: ContactRowProps) {
  const lastContact = props.contact.lastContact && new Date(props.contact.lastContact).toDateString();
  return (
    <tr>
      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.company}</td>
      <td>{props.contact.position}</td>
      <td>{lastContact}</td>
      <td>{props.contact.notes}</td>
      <td onClick={() => props.removeContact(props.contactIndex)}>x</td>
    </tr>
  )
}
