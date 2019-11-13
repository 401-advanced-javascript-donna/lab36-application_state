import { SAVE_GAME } from '../action/gameActions';

const gameState = [];

export default function reducer(state = gameState, action) {
  switch(action.type) {
    case SAVE_GAME:
      return [...state, action.payload];
    default: 
      return state;
  }
}
