import React, { Component } from 'react';

export default function ContactAdder() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      return false;
    }}>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Phone"/>
      <input type="text" placeholder="Company"/>
      <input type="text" placeholder="Position"/>
      <input type="text" placeholder="Last"/>
      <input type="text" placeholder="Notes"/>
      <input type="submit"/>
    </form>
  )
}
