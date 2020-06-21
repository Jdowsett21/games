import {
  FILTER_GAME_TYPES,
  FILTER_BY_TYPE,
  FILTER_SINGLE_GAME,
} from '../types';

export default (action, state) => {
  switch (action.type) {
    case FILTER_GAME_TYPES:
      return {
        ...state,
        games: action.payload,
      };
    case FILTER_BY_TYPE:
      return {
        ...state,
        games: action.payload,
      };
    case FILTER_SINGLE_GAME:
      return {
        ...state,
        games: action.payload,
      };

    default:
      return state;
  }
};
