import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import FormChatBot from '../components/FormChatBot';
import Routes from './Routes';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/App.scss';

@inject('shop')
@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-wrapper">
          <div className="App">
            <DevTools />
            <NavBar />
            <Routes />
            <FormChatBot />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
