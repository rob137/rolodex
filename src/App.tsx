import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import ContactsList from './ContactsList';

interface AppState {
  a?: any;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { a: undefined };
  }
  
  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => this.setState({a: data}));
  }

  render() {
    const a = this.state.a && JSON.stringify(this.state.a);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {a}
          </p>
          <ContactsList/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
