import {
  toggleInGameState,
  setToPlayersTurn,
} from './store/reducers/gameReducer';
import { clearTable } from './store/reducers/tableReducer'
import {removedPlaceDownCardsFromComputer} from './store/reducers/computerReducer'
import {
  placeCards,
  checkAndDetermindGroupType,
} from './Components/PlayerComponents/Place';

const pickASingle = (hand, tableId) => {

  if (!tableId) return [hand[0]]

  for (let i = 0; i < hand.length; i++){
    if (hand[i].id > tableId) return [hand[i]]
  }

  return []
}

const pickDoubles = (hand, tableHighestCardId) => {

  let cardNames = {};

  for (const card of hand) {
    if (!cardNames[card.name]) {
      cardNames[card.name] = {count: 1, cards: [card]}
    } else {
      cardNames[card.name].count += 1
      cardNames[card.name].cards.push(card)
    }
  }

  // keys and values
  let cardsNamesWithMoreThanOne = Object.entries(cardNames);
  let double = []
  for (let cardName of cardsNamesWithMoreThanOne) {
    const cards = cardName[1].cards;
    if (cards[cards.length - 1].id > tableHighestCardId) {
      double = [cards[cards.length - 2], cards[cards.length - 1]]
    }
  }

  return double

}

function Computer() {
  

  this.playWithNoConditions = function (hand) {
    // easy mode - plays single card
    return pickASingle(hand)
  };

  this.playWithConditions = function (table, hand) {
  
    switch (table.groupType) {
      case 'single':
        return pickASingle(hand, table.highestCardId);
      case 'double':
        return pickDoubles(hand, table.highestCardId);
      default:
        return []
    }
  };
  
  this.computerPlays = function (table, hand, dispatch) {
    let cards = []

    if (table.cards.length === 0) {
      // console.log("THE COMPUTER IS PLAYING AFTER PLAYER SKIPS:", "Table:", table, "HAND:", hand)
      cards = this.playWithNoConditions(hand);
    } else {
      cards = this.playWithConditions(table, hand)
    }

    if (cards.length === 0) {
      // computer can not find any cards that are better than the one on the table
      dispatch(clearTable())
      // Message: Computer passed it's turn. You can play any card(s) that are valid.

    } else {

      setTimeout(function () {
        console.log("PREVIOUSLY GOT AN ERROR HERE BECAUSE OF NO PRIORITY FOR THESE CARDS:", cards)
        const groupType = checkAndDetermindGroupType(cards);
        const highestCard = cards[cards.length - 1];
        // console.log("CARDS THAT COMPUTER PICKED:", cards)
        placeCards(dispatch, cards, groupType, highestCard);
        dispatch(removedPlaceDownCardsFromComputer(cards));
      }, 1000);
     

    }

    if (hand.length - cards.length === 0) {
      dispatch(toggleInGameState());
      // MESSAGE COMPUTER WON
    }

    // It's Player's turn
    dispatch(setToPlayersTurn());
    // console.log("wAS THIS EVER SET TO PLAYERS TURN?")
  }
};

let computer = new Computer();


export default computer