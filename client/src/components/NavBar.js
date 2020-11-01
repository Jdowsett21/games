import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarDropDown from './common/navbarDropDown';

function NavBar(props) {
  return (
    <>
      <nav className='navbar navbar-expand-lg NavBarStyle'>
        <div
          className='collapse navbar-collapse  justify-content-around'
          id='navbarNavDropdown'
        >
          <ul className='navbar-nav '>
            <li className='nav-item'>
              <Link className='navbar-brand active navBarFont' to='/all'>
                All
              </Link>
            </li>
          </ul>
          <NavbarDropDown />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
