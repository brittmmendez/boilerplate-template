
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import FormikSearch from './FormikSearch';
import '../styles/index.scss';

@inject('shop')
@observer
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }));
  }

  toggleNav = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  closeNav = () => {
    this.setState({
      isActive: false,
    });
  }

  render() {
    const { shop } = this.props;
    return (
      <nav className="navbar has-background-grey-light is-transparent">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <i className="fas fa-circle-thin" aria-hidden="true" />
          </Link>
          <div className="navbar-burger burger" data-target="navMenu" onClick={this.toggleNav}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenu" className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <div className="navbar-item" onClick={this.closeNav}>
              <Link className="button is-dark" to="/products-page">
                CUSTOMIZE TO ME
              </Link>
            </div>
            <div className="navbar-item">
              <FormikSearch closeNav={this.closeNav} />
            </div>
          </div>

          <div className="navbar-end" onClick={this.closeNav}>
            <Link className="navbar-item" to="/our-story">
              Our Story
            </Link>
            <Link className="navbar-item" to="/learn">
              Learn
            </Link>
            <Link className="navbar-item" to="/products-page">
              Products
            </Link>
            <div className="navbar-item">
              <div className="field is-grouped">
                <Link className="navbar-item" to="/my-cart">
                  <span className="icon">
                    <i className="fas fa-shopping-cart" />
                  </span>
                </Link>
                <Link className="navbar-item" to="/my-cart">
                  <span className="icon">
                    <i className="fas fa-heart" />
                  </span>
                </Link>
                <p className="control">
                  {!shop.user.loggedIn
                    && (
                    <Link className="navbar-item" to="/login" onClick={this.closeNav}>
                      <span className="icon">
                        <i className="fas fa-user" />
                      </span>
                    </Link>
                    )}
                  {shop.user.loggedIn
                    && (
                    <Link className="navbar-item" to="/account" onClick={this.closeNav}>
                      <span className="icon">
                        <i className="fas fa-user" />
                      </span>
                    </Link>
                    )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
