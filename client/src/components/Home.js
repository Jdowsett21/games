import React, { useContext } from 'react';
import CardGrid from '../components/common/CardGrid';
import GameContext from '../context//gameContext/gameContext';

function Home(props) {
  const gameContext = useContext(GameContext);
  const { games } = gameContext;
  return (
    <div
      id='carouselExampleControls'
      className='carousel slide'
      data-ride='carousel'
    >
      <div className='carousel-inner'>
        {games.map((game) => (
          <div className='carousel-item active'>
            <img className='d-block w-100' src={game.img} alt='First slide' />
          </div>
        ))}
        <a
          className='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
