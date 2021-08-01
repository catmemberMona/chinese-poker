import game from './gameReducer';
import { combineReducers } from 'redux';

import table from './tableReducer'

const rootReducer = combineReducers({
  game,
  table

});

export default rootReducer;
