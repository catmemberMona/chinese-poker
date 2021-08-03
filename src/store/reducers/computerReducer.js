// Constants
const GET_INITIAL_HAND_FOR_COMPUTER = 'GET_INITIAL_HAND_FOR_COMPUTER';
const REMOVE_SELECTED_CARDS_AFTER_PLACING_THEM_FOR_COMPUTER =
  'REMOVE_SELECTED_CARDS_AFTER_PLACING_THEM_FOR_COMPUTER';

// Create actions
export const giveComputerStack = (stack) => ({
  type: GET_INITIAL_HAND_FOR_COMPUTER,
  stack,
});

export const removedPlaceDownCardsFromComputer = (cards) => ({
  type: REMOVE_SELECTED_CARDS_AFTER_PLACING_THEM_FOR_COMPUTER,
  cards,
});

var initialState = {
  hand: [],
  cardsLeft: 0,
  cardsSelected: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_HAND_FOR_COMPUTER:
      return {
        ...state,
        hand: [...action.stack],
        cardsLeft: action.stack.length,
      };
    case REMOVE_SELECTED_CARDS_AFTER_PLACING_THEM_FOR_COMPUTER:
      const newHand = state.hand.filter((card) => !action.cards.includes(card));
      return {
        ...state,
        hand: [...newHand],
        cardsLeft: newHand.length,
        cardsSelected: [],
      };
    default:
      return state;
  }
};

export default reducer;
