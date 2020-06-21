import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarDropDown from './common/navbarDropDown';

function NavBar(props) {
  return (
    <>
      <nav className='navbar navbar-expand-lg NavBarStyle'>
        <Link className='navbar-brand navBarFont' to='/'>
          Home
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='#'>
                {' '}
                <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='navbar-brand active navBarFont' to='/popular'>
                Popular
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='navbar-brand active navBarFont' to='/all'>
                All
              </Link>
            </li>

            <NavbarDropDown />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
