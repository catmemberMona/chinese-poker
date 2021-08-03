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



function Computer() {
  

  this.playWithNoConditions = function (hand) {
    // easy mode - plays single card
    return [hand[0]];
  };
  
  this.computerPlays = function (table, hand, dispatch) {
    let cards = []
          console.log(
            'THE COMPUTER IS PLAYING AFTER PLAYER SKIPS:',
            table,
            hand
          );
    if (table.cards.length === 0) {
      console.log("THE COMPUTER IS PLAYING AFTER PLAYER SKIPS:", "Table:", table, "HAND:", hand)
      cards = this.playWithNoConditions(hand);
    } else {
      // cards = playWithConditions()
    }

    if (cards.length === 0) {
      // computer can not find any cards that are better
      dispatch(clearTable())
      // Message: Computer passed it's turn. Play any card(s) that are valid.

    } else {
        const groupType = checkAndDetermindGroupType(cards);
        const highestCard = cards[cards.length - 1];
      console.log("CARDS THAT COMPUTER PICKED:", cards)
      placeCards(dispatch, cards, groupType, highestCard);
      dispatch(removedPlaceDownCardsFromComputer(cards));

    }

    if (hand.length === 0) {
      dispatch(toggleInGameState());
      // MESSAGE COMPUTER WON
    }
    // IT's Player's turn
    dispatch(setToPlayersTurn());
  }



  // this.playWithConditions = function () {

  // }


  
};

let computer = new Computer();


export default computer