// Constants
const GET_PLACED_DOWN_CARDS = 'GET_PLACED_DOWN_CARDS';

// Create actions
export const updateCardsOnTable = (cards) => ({ type: GET_PLACED_DOWN_CARDS, cards });

var initialState = {
  cards: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACED_DOWN_CARDS:
      return { cards };
    default:
      return state;
  }
};

export default reducer;
