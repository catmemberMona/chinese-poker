// Constants
const GET_PLACED_DOWN_CARDS = 'GET_PLACED_DOWN_CARDS';
const REMOVE_ALL_CARDS = 'REMOVE_ALL_CARDS';

// Create actions
export const updateCardsOnTable = (cardsStat) => ({
  type: GET_PLACED_DOWN_CARDS,
  cardsStat,
});

export const clearTable = () => ({type: REMOVE_ALL_CARDS})

// change to object with hand cards data
var initialState = {
  cards: [],
  groupType: "",
  sumPriority: 0,
  highestCardId: 0,
  totalCards: 0
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACED_DOWN_CARDS:
      // console.log("Cards placed on table in table reducer:", action.cardsStat)
      return { ...action.cardsStat };
    case REMOVE_ALL_CARDS:
      return {...initialState}
    default:
      return state;
  }
};

export default reducer;
