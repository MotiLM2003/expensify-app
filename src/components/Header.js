import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <ul className='nav'>
    <li>
      <NavLink to='/' exact activeClassName='active-link'>
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink to='/create' activeClassName='active-link'>
        Create
      </NavLink>
    </li>

    <li>
      <NavLink to='/expense/' activeClassName='active-link'>
        Expense
      </NavLink>
    </li>
    <li>
      <NavLink to='/help' activeClassName='active-link'>
        Help
      </NavLink>
    </li>
  </ul>
);

export default Header;
