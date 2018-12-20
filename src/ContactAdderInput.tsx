import React from 'react';

import { ContactKey } from './types';

interface ContactAdderInputProps {
  fieldName: ContactKey;
  value: string;
  handleChange: (fieldName: ContactKey, input: string) => void; 
}

export default function ContactRow(props: ContactAdderInputProps) {
  const placeholder = (
    props.fieldName === 'lastContact' ? 'Last contacted' : props.fieldName.charAt(0).toUpperCase() + props.fieldName.slice(1)
  );
  return (
    <input
      type="text"
      onChange={(e) => props.handleChange(e.target.name as ContactKey, e.target.value)}
      value={props.value}
      name={props.fieldName}
      placeholder={placeholder}
    />
  );
}
