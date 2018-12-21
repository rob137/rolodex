import React from 'react';

import { formatDate } from './App';
import { ContactKey } from './types';

interface InteractiveCellProps {
  fieldName: ContactKey;
  data?: string;
  contactIndex: number;
  updateContact: (index: number, key: ContactKey, value: string) => void;
}

export default function ContactRow(props: InteractiveCellProps) {
  const updateContact = (event: any) => {
    event as Event;
    event.target && props.updateContact(props.contactIndex, props.fieldName, props.data || '');
  }

  return (
    <td
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={(e) => {
        if (e.which === 13 && e.shiftKey === false) {
          (e.target as HTMLElement).blur()
        }
      }}
      onBlur={(e) => {
        // For date field: accept only dates, and format them before saving to DOM 
        if (props.fieldName === 'lastContact' && isNaN(Date.parse(e.target.innerText))) {
          e.target.innerText = props.data || '';
          return e.preventDefault();
        } else if (props.fieldName === 'lastContact') {
          e.target.innerText = formatDate(e.target.innerText);
          e.preventDefault();
        }
        return updateContact(e);
      }}
    >
      {props.data}
    </td>
  );
}
