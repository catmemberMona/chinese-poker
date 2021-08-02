import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateCardsOnTable} from '../../store/reducers/tableReducer'


const Message = () => {
  return <div style={styles.message}>
    <p style={styles.text}>This is your turn. Select and place your card(s).</p>
  </div>
}

const caluclateSumOfPriorities = (cardsSelected) => {
  let sum = 0
  for (let card of cardsSelected) {
    sum += card.priority;
  }
  return sum
};

const isStraight = (cardsSelected) => {
  for (let i = 0; i < cardsSelected.length - 1; i++) {
    if (cardsSelected[i].priority + 1 !== cardsSelected[i + 1].priority) return false;
  }

  return true
}

const isFlush = (cardsSelected) => {
  const type = cardsSelected[0].type
  for (const card of cardsSelected) {
    if (card.type !== type ) return false
  }
  return true
};

const isFourOfAKindOrFullHouse = (cardsSelected) => {
  let cardNames = {}
  let typeCount = 0
  for (const card of cardsSelected) {

    if (!cardNames[card.name]) {
      cardNames[card.name] = 1
      typeCount += 1;
    } else {
      cardNames[card.name] += 1;
    }

    if (typeCount > 2) return false;
  }

  let numberOfEachCardName = Object.values(cardNames)
  // check if four of a kind
  if (numberOfEachCardName[0] === 1 || numberOfEachCardName[0] === 4) return 'four of a kind'
  // check if full house
  if (numberOfEachCardName[0] === 2 || numberOfEachCardName[0] === 3) return 'full house'
};

const checkAndDetermindGroupType = (cardsSelected) => {

  if (cardsSelected.length === 1) return 'single'
  if (cardsSelected.length === 2 && cardsSelected[0].priority === cardsSelected[1].priority) {
    console.log("ARE THESE THE SAME:", cardsSelected[0].priority, cardsSelected[1].priority)
    return 'double'
  }

  if (cardsSelected.length === 5) {
    if (isFlush(cardsSelected) && isStraight(cardsSelected))
      return 'straight flush';

    const isFourOrFull = isFourOfAKindOrFullHouse(cardsSelected)
    if (isFourOrFull !== false) return isFourOrFull
  
    if (isFlush(cardsSelected)) return 'flush';
    if (isStraight(cardsSelected)) return 'straight';
  }

  return false
  
}

const placeCards = (dispatch, cardsSelected, groupType) => {
  // calculations
  let groupStats = {
    cards: cardsSelected,
    groupType: groupType,
    sumPriority: caluclateSumOfPriorities(cardsSelected),
    highestCardId: cardsSelected[cardsSelected.length - 1].id,
    totalCards: cardsSelected.length,
  };
  console.log("DOES THIS WORK? GROUP STATS:", groupStats)
  dispatch(updateCardsOnTable(groupStats));
};

const Choice = () => {
  const dispatch = useDispatch()
  // player's hand 
  const cardsSelected = useSelector(state => state.player.cardsSelected)
  cardsSelected.sort((a,b) => a.priority - b.priority)
  const selectedCardsCount = cardsSelected.length

  const cardsOnTableCount = useSelector(state => state.table.totalCards)

  console.log("CARDS ON TABLE:", cardsOnTableCount)

  const checkCards = () => {
    if (selectedCardsCount === 0) {
      // Message that no cards are selected. Select cards or Pass your turn
      return
    }

    if (selectedCardsCount > 5 || selectedCardsCount === 4 || selectedCardsCount === 3) {
      // Message: Invalid number of cards were selected
      return
    }
        console.log('DOES THIS PASS HEEREERERERERERE');

    // returns false if group type is invalid
    const groupType = checkAndDetermindGroupType(cardsSelected)
    if (groupType === false) {
      // Message: Invalid card groupings. Take a look at the possible combinations
      return
    }

    if (cardsOnTableCount === 0) {
      placeCards(dispatch, cardsSelected, groupType);
      // computer turn/plays
    }

    if (cardsOnTableCount !== selectedCardsCount) {
      // update message 
      return 
    }




  }

  return (
    <div style={styles.choice}>
      <button style={styles.buttons} onClick={checkCards}>
        Place
      </button>
      <button style={styles.buttons}>Pass</button>
    </div>
  );
}

const Turn = () => {
  return <div style={styles.turn}>
    <Message />
    <Choice />
  </div>;
};

let styles = {
  turn: {
    flex: 1,
    flexWrap: 'wrap',
  },
  message: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  choice: {
    flex: 2,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: '.85em',
    fontWeight: 600,
    color: 'green',

  },
  buttons: {
    width: 100,
    height: 35,
    borderRadius: 8,
    margin: 3,
  },
};

export default Turn;
