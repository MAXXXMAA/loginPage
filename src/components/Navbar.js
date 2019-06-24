import React, { Component } from 'react'
import { Auth } from 'aws-amplify';

export default class Navbar extends Component {
  handleLogout = async event => {
    event.preventDefault();
    try {
      Auth.signOut();
      this.props.auth.setAuthStatus(false);
      this.props.auth.setUser(null);
    }catch(error) {
      console.log(error.message);
    }
  }
  
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation" class="flex-container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <strong>Brand Logo</strong>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
            <a href="/" className="navbar-item">
              Products
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {this.props.auth.isAuthenticated && this.props.auth.user && (
                <p>Hello {this.props.auth.user.username}</p>
              )}
              <div className="buttons">
                {!this.props.auth.isAuthenticated && (
                  <div>
                    <a href="/" className="button is-primary">
                      <strong>Register</strong>
                    </a>
                    <a href="/login" className="button is-light">
                      <strong>Log in</strong>
                    </a>
                  </div>
                )}
                {this.props.auth.isAuthenticated && (
                    <a href="/" className="button is-warning">
                    Log out
                    </a>
                )}
                </div>
              </div>
            </div>
          </div>
      </nav>
    )
  }
}
