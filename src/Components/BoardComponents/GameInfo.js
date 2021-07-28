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
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    fontSize: "1.5em",
    alignSelf: "start",
  }
};
export default GameInfo;
