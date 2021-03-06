import React from 'react'
import { Card } from '@material-ui/core';

const CustomizeCard = (props) => {
  let { cardSize, card } = props

  return (
    <Card
      style={{ ...cardSize, backgroundColor: card.isSelected ? 'orange' : 'white', }}
      raised={true}
    >
      <div style={styles.cardContent}>
            <div style={styles.name && styles.nameTop}>{card.name}</div>
        <div style={styles.element}>
          <img src={card.typeImage} width='40vw' height='40vw' /></div>
            <div style={(styles.name, styles.nameBottom)}>{card.name}</div>
          </div>
        </Card>
  );
};

let styles = {
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    border: '1px black solid',
    margin: 3,
    padding: 3,
    backgroundColor: 'white',
  },
  name: {
    flex: 1,
    alignItems: 'center',
  },
  nameTop: {
    justifyContent: 'flex-start',
  },
  nameBottom: { justifyContent: 'flex-end' },
  element: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default CustomizeCard