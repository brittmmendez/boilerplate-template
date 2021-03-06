import React, { Component } from 'react';
// import DevTools from 'mobx-react-devtools';
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
          {/* <DevTools /> */}
          <section className="hero is-fullheight">
            <NavBar />
            <Routes />
            <FormChatBot />
            <Footer />
          </section>
        </div>
      </Router>
    );
  }
}
export default App;
