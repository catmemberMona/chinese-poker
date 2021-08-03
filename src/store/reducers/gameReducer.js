// Constants
const SET_FIRST_GAME_TO_FALSE = 'SET_FIRST_GAME_TO_FALSE';
const TOGGLE_IN_GAME = 'TOGGLE_IN_GAME';
const ASSIGN_AS_PLAYERS_TURN = 'ASSIGN_AS_PLAYERS_TURN';
const ASSIGN_AS_COMPUTERS_TURN = 'ASSIGN_AS_COMPUTERS_TURN';

// Create actions
export const setFirstGameStateToFalse = () => ({ type: SET_FIRST_GAME_TO_FALSE} )
export const toggleInGameState = () => ({ type: TOGGLE_IN_GAME })
export const setToPlayersTurn = () => ({ type: ASSIGN_AS_PLAYERS_TURN })
export const setToComputersTurn = () => ({type: ASSIGN_AS_COMPUTERS_TURN})


var initialState = {
  isFirstGame: true,
  isInPlay: false,
  isPlayersTurn: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_GAME_TO_FALSE:
      return { ...state, isFirstGame: false };
    case TOGGLE_IN_GAME:
      return { ...state, isInPlay: !state.isInPlay }
    case ASSIGN_AS_PLAYERS_TURN:
      return { ...state, isPlayersTurn: true }
    case ASSIGN_AS_COMPUTERS_TURN:
      return {...state, isPlayersTurn: false}
    default:
      return state;
  }
};

export default reducer;
