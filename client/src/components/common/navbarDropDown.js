import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import GameContext from '../../context/gameContext/gameContext';

function NavbarDropDown(props) {
  const gameContext = useContext(GameContext);
  const { filterGameTypes, filterByType } = gameContext;
  return (
    <Fragment>
      {filterGameTypes().map((type) => (
        <li className='nav-item dropdown' key={type}>
          <Link
            className='navbar-brand active navBarFont'
            to={`/${type}`}
            id='navbarDropdownMenuLink'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'
          >
            {type}
          </Link>
          <Link
            className='navbar-brand active dropdown-toggle navBarFont'
            to={`/${type}`}
            id='navbarDropdownMenuLink'
            role='button'
            data-toggle='dropdown'
            span='carot'
            aria-haspopup='true'
            aria-expanded='false'
          ></Link>

          <div
            className='dropdown-menu'
            aria-labelledby='navbarDropdownMenuLink'
          >
            {filterByType(type).map((game) => (
              <Link
                className='dropdown-item'
                key={game.name}
                to={`/${game.name}`}
              >
                {game.name}
              </Link>
            ))}
          </div>
        </li>
      ))}
    </Fragment>
  );
}

export default NavbarDropDown;
