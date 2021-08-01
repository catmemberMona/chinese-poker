// Constants
const ADD_SELECTED_CARD = 'ADD_SELECTED_CARD';
const REMOVE_SELECTED_CARD = 'REMOVE_SELECTED_CARD';

// Create actions
export const addSelectedCard = (card) => ({
  type: ADD_SELECTED_CARD,
  card,
});

export const removeCardsSelected = (card) => ({
  type: REMOVE_SELECTED_CARD,
  card,
});

var initialState = {
  cardsSelected: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_CARD:
      return { ...state, cardsSelected: [...state.cardsSelected, action.card]};
    case REMOVE_SELECTED_CARD:
      const index = state.indexOf(action.card);
      if (index) state.cardsSelected.splice(index, 1)
      break
    default:
      return state;
  }
};

export default reducer;
