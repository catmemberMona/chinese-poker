import React from 'react';
import { Card } from '@material-ui/core';

const CustomizeCard = () => {
  return (
    <Card style={ styles.card}>
      <div style={styles.cardInner}>
        <h1 style={{flex: 1}}>INT</h1>
      </div>
    </Card>
  )
}

const Cards = () => {
  return (
    <div style={styles.cards}>
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
      <CustomizeCard />
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
  },
  cardInner: {
    flex: 1,
    margin: 5
  }
};
export default Table;
