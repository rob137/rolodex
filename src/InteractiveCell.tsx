import React from 'react';

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
        if (props.fieldName === 'lastContact' && isNaN(Date.parse(e.target.innerText))) {
          e.target.innerText = props.data || '';
          return e.preventDefault();
        }
        return updateContact(e);
      }}
    >
      {props.data}
    </td>
  );
}
