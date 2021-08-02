import game from './gameReducer';
import { combineReducers } from 'redux';

import table from './tableReducer'
import player from './playerReducer'

const RESET = 'RESET'

export const resetGame = () => ({type: RESET})

const appReducer = combineReducers({
  game,
  table,
  player

});

const rootReducer = (state, action) => {
   if (action.type === RESET) {
     return appReducer(undefined, action);
   }

   return appReducer(state, action);
}

export default rootReducer;
