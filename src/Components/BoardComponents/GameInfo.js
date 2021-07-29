import React from 'react';

const GameInfo = () => {
  return (
    <div style={styles.gameInfo}>
      <h1 style={styles.heading}>Elemental Poker</h1>
    </div>
  )
};

let styles = {
  gameInfo: {
    flex: 0.8,
    justifyContent: 'center',
  },
  heading: {
    fontSize: '1.2em',
    margin: '.5em',
    alignSelf: 'start',
    background: 'rgba(38, 63, 38, 0.7)',
    borderBottomRightRadius: 10,
    padding: 10
  },
};
export default GameInfo;
