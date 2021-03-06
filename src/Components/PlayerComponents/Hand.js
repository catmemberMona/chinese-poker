import React, { useState } from 'react';
import CustomizeCard from '../CustomizeCard';
import { useSelector, useDispatch } from 'react-redux';

import {
  addSelectedCard,
  removeCardSelected,
} from '../../store/reducers/playerReducer';

const Cards = () => {
  let dispatch = useDispatch()
  let cards = useSelector((state) => state.player.hand)
  let cardsSelected = useSelector((state) => state.player.cardsSelected);

  const selectCard = (card) => {
    if (!cardsSelected.includes(card)) {
      card.isSelected = true;
      dispatch(addSelectedCard(card))
    } else {
      card.isSelected = false;
      dispatch(removeCardSelected(card))
    }
  }

  return (
    <div style={styles.cards}>
      <ul style={{flex:1}}>
      {cards.map((card) => {
        return (
          <li
            style={{
              ...styles.item,
              marginTop: card.isSelected ? -10 : 0,
              marginBottom: card.isSelected? 10 : 0,
    
            }}
            key={card.id}
            onClick={() => selectCard(card)}
          >
            <CustomizeCard
              cardSize={styles.card}
              cardInner={styles.cardInner}
              card={card}
            />
          </li>
        );
      })}
      </ul>
    </div>
  );
};

const Hand = () => {
  return (
    <div style={styles.hand}>
      <Cards />
    </div>
  );
};

let styles = {
  hand: {
    flex: 5,
    flexDirection: 'row',
    background: 'rgba(38, 63, 38, 0.7)',
    overflow: 'hidden',
  },
  cards: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: '1.5em',
    marginRight: '1em',
    paddingTop: '1em'
  },
  item: {
    background: 'rgba(0, 0, 0, 0)',
    flex: 1
  },
  card: {
    height: '10vw',
    width: '7.5vw',
    minWidth: 68,
    minHeight: 90,
  },
};
export default Hand;
