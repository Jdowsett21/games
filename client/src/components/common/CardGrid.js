import React, { Fragment, useContext } from 'react';
import GameContext from '../../context/gameContext/gameContext';
import Card from './Card';

function CardGrid({ location }) {
  const gameContext = useContext(GameContext);

  return (
    <Fragment>
      <div className='card-deck '>
        <Card location={location} />
      </div>
    </Fragment>
  );
}

export default CardGrid;
