import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  bottom: '0',
  width: '100%',
  height: '60px',
  background: '#6cf',
};

const Footer = () => (
  <footer className="footer has-background-white-bis" style={style}>
    <div className="container">
      <div className="columns">
        <div className="column is-6 is-size-7">
          <Link className="navbar-item has-text-grey" to="/">
            <i className="fas fa-circle-o" />
          </Link>
        </div>
        <div className="column is-6">
          <div className="columns">
            <div className="column is-4">
              <p className="title is-7 is-marginless has-text-grey"> Footer Goodness </p>
            </div>
            <div className="column is-4 is-size-7">
              <p className="title is-7 is-marginless has-text-grey"> Footer Goodness </p>
            </div>
            <div className="column is-4 is-size-7">
              <p className="title is-7 is-marginless has-text-grey"> Footer Goodness </p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-4">
              <p className="title is-7 is-marginless has-text-grey"> Footer Goodness </p>
            </div>
            <div className="column is-4 is-size-7">
              <p className="title is-7 is-marginless has-text-grey"> Footer Goodness </p>
            </div>
            <div className="column is-4 is-size-7">
              <p className="title is-7 is-marginless has-text-grey"> Footer Goodness </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
