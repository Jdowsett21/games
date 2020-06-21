import React from 'react';
import BingoCard from './BingoCard';
function BingoGrid(props) {
  return (
    <div className='container'>
      <h1>Bingo</h1>
      <div className='row'>
        <div className='col'>
          <BingoCard />
        </div>
        <div className='col'>
          <BingoCard />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <BingoCard />
        </div>
        <div className='col'>
          <BingoCard />
        </div>
      </div>
    </div>
  );
}

export default BingoGrid;
