import React, { Component } from 'react';

import InteractiveCell from './InteractiveCell';
import { Contact, ContactKey } from './types';

interface ContactRowProps {
  contact: Contact;
  contactIndex: number;
  updateContact: (index: number, key: ContactKey, value: string) => void;
  removeContact: (index: number) => void;
}

export default function ContactRow(props: ContactRowProps) {
  const lastContact = props.contact.lastContact && new Date(props.contact.lastContact).toDateString();
  const propNames: ContactKey[] = ['name', 'phone', 'company', 'position', 'lastContact', 'notes'];

  return (
    <tr>
      {propNames.map((propName: ContactKey, key: key) => {
        return (
          <InteractiveCell
            contactKey={propName}
            data={props.contact[propName]}
            contactIndex={props.contactIndex}
            updateContact={props.updateContact}
            key={key}
          />
          );
      })}
      {/* <td
        contentEditable={true}
        suppressContentEditableWarning={true}
        title={'name'}
        onKeyDown={(e) => { if (e.which === 13 && e.shiftKey === false) { (e.target as HTMLElement).blur() }}}
        onBlur={(e) => updateContact(e)}
      >
        {props.contact.name}
      </td>
      <td
        contentEditable={true}
        suppressContentEditableWarning={true}
        title={'phone'}
        onKeyDown={(e) => { if (e.which === 13 && e.shiftKey === false) { (e.target as HTMLElement).blur() }}}
        onBlur={(e) => updateContact(e)}
      >
        {props.contact.phone}
      </td>
      <td
        contentEditable={true}
        suppressContentEditableWarning={true}
        title={'company'}
        onKeyDown={(e) => { if (e.which === 13 && e.shiftKey === false) { (e.target as HTMLElement).blur() }}}
        onBlur={(e) => updateContact(e)}
      >
        {props.contact.company}
      </td>
      <td
        contentEditable={true}
        suppressContentEditableWarning={true}
        title={'position'}
        onKeyDown={(e) => { if (e.which === 13 && e.shiftKey === false) { (e.target as HTMLElement).blur() }}}
        onBlur={(e) => updateContact(e)}
      >
        {props.contact.position}
      </td>
      <td
        contentEditable={true}
        suppressContentEditableWarning={true}
        title={'lastContact'}
        onKeyDown={(e) => { if (e.which === 13 && e.shiftKey === false) { (e.target as HTMLElement).blur() }}}
        onBlur={(e) => updateContact(e)}
      >
        {lastContact}
      </td>
      <td
        contentEditable={true}
        suppressContentEditableWarning={true}
        title={'notes'}
        onKeyDown={(e) => { if (e.which === 13 && e.shiftKey === false) { (e.target as HTMLElement).blur() }}}
        onBlur={(e) => updateContact(e)}
      >
        {props.contact.notes}
      </td> */}
      <td onClick={() => props.removeContact(props.contactIndex)}>x</td>
    </tr>
  )
}
