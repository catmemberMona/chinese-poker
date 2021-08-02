// Constants
const ADD_SELECTED_CARD = 'ADD_SELECTED_CARD';
const REMOVE_SELECTED_CARD = 'REMOVE_SELECTED_CARD';
const GET_INITIAL_HAND = 'GET_INITIAL_HAND';

// Create actions
export const addSelectedCard = (card) => ({
  type: ADD_SELECTED_CARD,
  card,
});

export const removeCardSelected = (card) => ({
  type: REMOVE_SELECTED_CARD,
  card
});

export const givePlayerStack = (stack) => ({
  type: GET_INITIAL_HAND,
  stack
})

var initialState = {
  hand: [],
  cardsLeft: 0,
  cardsSelected: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_HAND:
      return { ...state, hand: [...action.stack], cardsLeft: action.stack.length };
    case ADD_SELECTED_CARD:
      return { ...state, cardsSelected: [...state.cardsSelected, action.card] };
    case REMOVE_SELECTED_CARD:
      const index = state.cardsSelected.indexOf(action.card);
      const selected = state.cardsSelected.filter((card => card.id !== action.card.id) )
      return { ...state, cardsSelected: [...selected] };
    default:
      return state;
  }
};

export default reducer;
