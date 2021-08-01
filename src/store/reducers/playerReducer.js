// Constants
const ADD_SELECTED_CARD = 'ADD_SELECTED_CARD';
const REMOVE_SELECTED_CARD = 'REMOVE_SELECTED_CARD';
const GET_INITIAL_HAND = 'GET_INITIAL_HAND';

// Create actions
export const addSelectedCard = (card) => ({
  type: ADD_SELECTED_CARD,
  card,
});

export const removeCardsSelected = (card) => ({
  type: REMOVE_SELECTED_CARD,
  card,
});

export const givePlayerStack = (stack) => ({
  type: GET_INITIAL_HAND,
  cards
})

var initialState = {
  hand: [], 
  cardsSelected: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_HAND:
      return {...state, hand: [...action.stack]}
    case GET_SELECTED_CARD:
      return { ...state, cardsSelected: [...state.cardsSelected, action.card] };
    case REMOVE_SELECTED_CARD:
      const index = state.cardsSelected.indexOf(action.card);
      const selected = index
        ? state.cardsSelected.splice(index, 1)
        : state.cardsSelected;
      return { ...state, cardsSelected: [...selected] };
    default:
      return state;
  }
};

export default reducer;
