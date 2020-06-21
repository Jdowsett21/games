import React, { useContext, Fragment } from 'react';
import GameContext from '../../context/gameContext/gameContext';
import { withRouter, Route } from 'react-router-dom';
import SpellBound from '../../games/Words/SpellBound';

function Card({ location, history }) {
  const gameContext = useContext(GameContext);
  const { filterByType } = gameContext;
  const gameType = `${location.pathname
    .charAt(1)
    .toUpperCase()}${location.pathname.slice(2)}`;
  console.log(Array(9));
  const onClick = (game) => {
    history.push(`${game}`);
  };
  return (
    <Fragment>
      {filterByType(gameType).map((game) => (
        <div key={game.name} className='w-25 d-none d-sm-block cardShape'>
          <div className='cardCustom '>
            <img
              style={{ pointerEvents: 'all' }}
              src={game.img}
              onClick={() => onClick(game.name)}
              className='cardImageCustom  '
              alt='...'
            />
            <h4 className='cardTitle' onClick={() => onClick(game.name)}>
              {game.name}
            </h4>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default withRouter(Card);
