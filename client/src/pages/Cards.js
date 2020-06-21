import React from 'react';
import CardGrid from '../components/common/CardGrid';

function Cards({ location }) {
  return (
    <div>
      <CardGrid location={location} />
    </div>
  );
}

export default Cards;
