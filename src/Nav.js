import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
        <nav className="main-nav">
            <ul>
                <li><a >Cats</a></li>
                <li><a >Dogs</a></li>
                <li><a >Computers</a></li>
            </ul>
      </nav>

    );
  }
}

export default Nav;
