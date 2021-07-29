import React from 'react';
import { Card } from '@material-ui/core';

const CustomizeCard = () => {
  return (
    <li style={styles.item}>
      <Card style={styles.card} raised='true'>
        <div style={styles.cardInner}>
          <h3 style={{ flex: 1 }}>INT</h3>
        </div>
      </Card>
    </li>
  );
};

const Cards = () => {
  return (
    <div style={styles.cards}>
      <ul>
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
        <CustomizeCard />
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
  },
  card: {
    height: '10vw',
    width: '7.5vw',
    minWidth: 68,
    minHeight: 90,
  },
  cardInner: {
    flex: 1,
    margin: 3,
  },
};
export default Hand;
