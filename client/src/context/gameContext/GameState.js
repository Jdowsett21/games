import React, { useReducer } from 'react';
import GameReducer from './gameReducer';
import GameContext from './gameContext';
import {
  FILTER_GAME_TYPES,
  FILTER_SINGLE_GAME,
  FILTER_BY_TYPE,
} from '../types';
import solitaire from '../../img/solitaire.webp';
import sudoku from '../../img/sudoku.webp';
import crossword from '../../img/crossword.webp';
import scramble from '../../img/scramble.webp';
import spellbound from '../../img/spellbound.webp';
import bridge from '../../img/bridge.webp';
import jigsaw from '../../img/jigsaw.webp';
import mahjong from '../../img/mahjong.webp';
import dailyCrossword from '../../img/dailyCrossword.webp';
import blackjack from '../../img/blackjack.webp';
import blockchamp from '../../img/blockchamp.webp';
import trizzle from '../../img/trizzle.webp';

function GameState({ children }) {
  const initialState = {
    games: [
      {
        name: 'Solitaire',
        type: 'Cards',
        img: solitaire,
      },
      {
        name: 'Blackjack',
        type: 'Cards',
        img: blackjack,
      },
      {
        name: 'Mahjong',
        type: 'Strategy',
        img: mahjong,
      },
      {
        name: 'Trizzle',
        type: 'Puzzles',
        img: trizzle,
      },
      {
        name: 'Bridge',
        type: 'Cards',
        img: bridge,
      },
      {
        name: 'DailyCrossword',
        type: 'Words',
        img: dailyCrossword,
      },
      {
        name: 'Blockchamp',
        type: 'Strategy',
        img: blockchamp,
      },
      {
        name: 'Jigsaw',
        type: 'Puzzles',
        img: jigsaw,
      },
      {
        name: 'Spellbound',
        type: 'Words',
        img: spellbound,
      },
      {
        name: 'Scramble',
        type: 'Words',
        img: scramble,
      },
      {
        name: 'Sudoku',
        type: 'Puzzles',
        img: sudoku,
      },
      {
        name: 'Crossword',
        type: 'Words',
        img: crossword,
      },
    ],
  };
  const [state, dispatch] = useReducer(GameReducer, initialState);

  const filterGameTypes = () => {
    return [...new Set(state.games.map((arr) => arr.type))];
  };

  const filterByType = (type) => {
    return state.games.filter((game) =>
      type === 'All' ? game : game.type === type
    );
  };

  const findOneGame = (value) => {
    return state.games.filter((game) => game.name === value);
  };

  return (
    <GameContext.Provider
      value={{
        games: state.games,
        filterGameTypes,
        filterByType,
        findOneGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameState;
