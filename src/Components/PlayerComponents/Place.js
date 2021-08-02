import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCardsOnTable } from '../../store/reducers/tableReducer';


const caluclateSumOfPriorities = (cardsSelected) => {
  let sum = 0;
  for (let card of cardsSelected) {
    sum += card.priority;
  }
  return sum;
};

const isStraight = (cardsSelected) => {
  for (let i = 0; i < cardsSelected.length - 1; i++) {
    if (cardsSelected[i].priority + 1 !== cardsSelected[i + 1].priority)
      return false;
  }

  return true;
};

const isFlush = (cardsSelected) => {
  const type = cardsSelected[0].type;
  for (const card of cardsSelected) {
    if (card.type !== type) return false;
  }
  return true;
};

const getHighestPriorityCardThatMattersForFullHouseAndFourKinds = (
  cardsSelected
) => {
  let cardNames = {};
  for (const card of cardsSelected) {
    if (!cardNames[card.name]) {
      cardNames[card.name] = 1;
    } else {
      cardNames[card.name] += 1;
    }
  }

  // keys and values
  let pairs = Object.entries(cardNames);
  const cardName = pairs[0][1] > pairs[1][1] ? pairs[0][0] : pairs[1][0];
  // return highest card id
  const cards = cardsSelected.filter((card) => card.name === cardNames);
  return cards[cards.length - 1];
};

const isFourOfAKindOrFullHouse = (cardsSelected) => {
  let cardNames = {};
  let typeCount = 0;
  for (const card of cardsSelected) {
    if (!cardNames[card.name]) {
      cardNames[card.name] = 1;
      typeCount += 1;
    } else {
      cardNames[card.name] += 1;
    }

    if (typeCount > 2) return false;
  }

  let numberOfEachCardName = Object.values(cardNames);
  // check if four of a kind
  if (numberOfEachCardName[0] === 1 || numberOfEachCardName[0] === 4)
    return 'four of a kind';
  // check if full house
  if (numberOfEachCardName[0] === 2 || numberOfEachCardName[0] === 3)
    return 'full house';
};

const checkAndDetermindGroupType = (cardsSelected) => {
  if (cardsSelected.length === 1) return 'single';
  if (
    cardsSelected.length === 2 &&
    cardsSelected[0].priority === cardsSelected[1].priority
  ) {
    console.log(
      'ARE THESE THE SAME:',
      cardsSelected[0].priority,
      cardsSelected[1].priority
    );
    return 'double';
  }

  if (cardsSelected.length === 5) {
    if (isFlush(cardsSelected) && isStraight(cardsSelected))
      return 'straight flush';

    const isFourOrFull = isFourOfAKindOrFullHouse(cardsSelected);
    if (isFourOrFull !== false) return isFourOrFull;

    if (isFlush(cardsSelected)) return 'flush';
    if (isStraight(cardsSelected)) return 'straight';
  }

  return false;
};

const placeCards = (dispatch, cardsSelected, groupType, highestCard) => {
  // calculations
  let groupStats = {
    cards: cardsSelected,
    groupType: groupType,
    sumPriority: caluclateSumOfPriorities(cardsSelected),
    highestCardId: highestCard.id,
    totalCards: cardsSelected.length,
  };
  console.log('DOES THIS WORK? GROUP STATS:', groupStats);
  dispatch(updateCardsOnTable(groupStats));
};


const Place = () => {

  const dispatch = useDispatch();
  // player's hand
  const cardsSelected = useSelector((state) => state.player.cardsSelected);
  cardsSelected.sort((a, b) => a.priority - b.priority);
  const selectedCardsCount = cardsSelected.length;

  const table = useSelector((state) => state.table);
  const cardsOnTableCount = table.totalCards;
  const highestCardIdOnTable = table.highestCardId;
  const onTableGroupType = table.groupType;

  console.log('CARDS ON TABLE:', cardsOnTableCount);

  const checkCards = () => {
    if (selectedCardsCount === 0) {
      // Message that no cards are selected. Select cards or Pass your turn
      return;
    }

    if (
      selectedCardsCount > 5 ||
      selectedCardsCount === 4 ||
      selectedCardsCount === 3
    ) {
      // Message: Invalid number of cards were selected
      return;
    }

    // returns false if group type is invalid
    const groupType = checkAndDetermindGroupType(cardsSelected);
    if (groupType === false) {
      // Message: Invalid card groupings. Take a look at the possible combinations
      return;
    }

    const highestCard =
      groupType === 'full house' || groupType === 'four of a kind'
        ? getHighestPriorityCardThatMattersForFullHouseAndFourKinds(
            cardsSelected
          )
        : cardsSelected[cardsSelected.length - 1];
    if (cardsOnTableCount === 0) {
      placeCards(dispatch, cardsSelected, groupType, highestCard);
      // computer turn/plays
    }

    if (groupType !== onTableGroupType) {
      // The single or double that was selected is not of the same type as the table's cards
      if (groupType === 'single' || groupType === 'double') return;
      // the table has a single or a double and the player doesn't
      if (onTableGroupType === 'single' || onTableGroupType === 'double')
        return;
    }

    // Groups are not of the same types and cards on table and hand are 5 card groups
    if (groupType !== onTableGroupType) {
      let groupTypeRanking = {
        'straight flushing': 5,
        'for of a kind': 4,
        'full house': 3,
        flush: 2,
        straight: 1,
      };

      if (groupTypeRanking[groupType] < groupTypeRanking[onTableGroupType]) {
        // This grouping of cards is of a lower rank than the one on the table
        return;
      } else {
        // The selected cards are of a higher ranking than the tables
        placeCards(dispatch, cardsSelected, groupType, highestCard);
      }
    }

    console.log('DOES THIS PASS HEEREERERERERERE:', groupType);

    // These have the same group types
    // check for higher lvl group
    if (highestCard.id > highestCardIdOnTable) {
      placeCards(dispatch, cardsSelected, groupType, highestCard);
    } else {
      // message: Select cards that have a higher rank than the ones on the table
      return;
    }
  };

  return (
    <button style={styles.buttons} onClick={checkCards}>
      Place
    </button>
  );
}

let styles = {
  buttons: {
    width: 100,
    height: 35,
    borderRadius: 8,
    margin: 3,
  },
};

export default Place