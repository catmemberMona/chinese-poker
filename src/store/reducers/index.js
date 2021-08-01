import game from './gameReducer';
import { combineReducers } from 'redux';

import table from './tableReducer'
import player from './playerReducer'

const rootReducer = combineReducers({
  game,
  table,
  player

});

export default rootReducer;
