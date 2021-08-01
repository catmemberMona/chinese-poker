// Constants
const SET_FIRST_GAME_TO_FALSE = 'SET_FIRST_GAME_TO_FALSE';
const TOGGLE_IN_GAME = 'TOGGLE_IN_GAME';

// Create actions
export const setFirstGameStateToFalse = () => ({ type: SET_FIRST_GAME_TO_FALSE} )
export const toggleInGameState = () => ({ type: TOGGLE_IN_GAME } )


var initialState = {
  isFirstGame: true,
  isInPlay: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_GAME_TO_FALSE:
      return { ...state, isFirstGame: false };
    case TOGGLE_IN_GAME:
      return {...state, isInPlay: !state.isInPlay}
    default:
      return state;
  }
};

export default reducer;
