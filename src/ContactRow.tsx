import React, { Component } from 'react';

import { Contact } from './types';

interface ContactRowProps {
  contact: Contact;
}

export default function ContactRow(props: ContactRowProps) {
  const lastContact = new Date(props.contact.lastContact).toDateString();
  return (
    <tr>
      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.company}</td>
      <td>{props.contact.position}</td>
      <td>{lastContact}</td>
      <td>{props.contact.notes}</td>
    </tr>
  )
}
