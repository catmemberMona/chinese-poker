import React from 'react';
import CustomizeCard from '../Card'
import {createDeck} from '../../Data/card'

let dummyCards = createDeck().slice(0,5);

const Cards = () => {
  return (
    <div style={styles.cards}>
      {
        dummyCards.map(card => {
          return (
            <CustomizeCard key={card.priority + card.typePriority}
              cardSize={styles.card}
              cardInner={styles.cardInner}
              card={card}
            />
          );
        })
      }
    </div>
  );
}

const Table = () => {
  return <div style={styles.table}>
    <Cards />
  </div>;
};

let styles = {
  table: {
    flex: 1,
  },
  cards: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap"
  },
  card: {
    height: "20vw",
    width: "12vw",
    minWidth: 90,
    minHeight: 140,
    margin: 1
  },
  cardInner: {
    flex: 1,
    margin: 5
  }
};
export default Table;
