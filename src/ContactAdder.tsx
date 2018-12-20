import React, { Component } from 'react';

export default function ContactAdder() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      return false;
    }}>
      <input type="text" name="name" placeholder="Name"/>
      <input type="text" name="phone" placeholder="Phone"/>
      <input type="text" name="company" placeholder="Company"/>
      <input type="text" name="position" placeholder="Position"/>
      <input type="text" name="lastContact" placeholder="Last contacted"/>
      <input type="text" name="notes" placeholder="Notes"/>
      <input type="submit"/>
    </form>
  )
}
