import React from 'react';
import CustomizeCard from '../Card';
import {createDeck} from '../../Data/card'

let dummyCards = createDeck().slice(0,26);

const Cards = () => {
  return (
    <div style={styles.cards}>
      <ul style={{flex:1}}>
      {dummyCards.map((card) => {
        return (
          <li style={styles.item} key={card.priority + card.typePriority}>
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
