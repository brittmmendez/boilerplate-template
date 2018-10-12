import React from 'react';
import DevTools from 'mobx-react-devtools';
import FormChatBot from './components/FormChatBot';
import logo from './logo.svg';
import './styles/App.scss';

const App = () => (
  <div className="App">
    <DevTools />
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        and save to reload!!
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    <FormChatBot />
  </div>
);


export default App;
