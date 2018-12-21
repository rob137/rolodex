import React, { Component } from 'react';
import './ContactList.scss';

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
    <table className="ContactList">
      <thead className="ContactList_thead">
        <tr className="ContactList_thead_tr">
          {props.fieldNames.map((fieldName, key) => {
            const header = (
              fieldName === 'lastContact'
                  ? 'Last Contacted'
                  : fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
            );
            return <th className="ContactList_thead_tr_header" key={key}>{header}</th>
          })}
        </tr>
      </thead>
      <tbody className="ContactList_tbody">
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
