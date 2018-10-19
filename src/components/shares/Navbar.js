import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <Menu>
        <NavLink to='/'>
          <Menu.Item>Main</Menu.Item>
        </NavLink>
        <NavLink to='/post'>
          <Menu.Item>Post</Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}

export default Navbar;
