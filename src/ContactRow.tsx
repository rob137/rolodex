import React, { Component } from 'react';

import { Contact } from './types';

interface ContactRowProps {
  contact: Contact;
}

export default function ContactRow(props: ContactRowProps) {
  return (
    <tr>
      <td>{props.contact.name}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.company}</td>
      <td>{props.contact.position}</td>
      <td>{props.contact.status}</td>
      <td>{props.contact.lastContact}</td>
      <td>{props.contact.notes}</td>
    </tr>
  )
}
