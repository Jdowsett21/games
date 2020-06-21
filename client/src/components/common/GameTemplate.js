import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import GameContext from '../../context/gameContext/gameContext';
function GameTemplate({ location }) {
  const gameContext = useContext(GameContext);
  const { findOneGame } = gameContext;
  const game = `${location.pathname
    .charAt(1)
    .toUpperCase()}${location.pathname.slice(2)}`;

  return (
    <div>
      {findOneGame(game).map((g) => (
        <>
          <h1 className='cardTitle'>{g.name}</h1>
          <img src={g.img} className='singleImageCustom' />
        </>
      ))}
      <div id='wrapper'>
        <button className='playButton'>Play</button>
      </div>
    </div>
  );
}

export default withRouter(GameTemplate);
