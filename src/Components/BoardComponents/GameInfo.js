import React from 'react';
import Info from './Info'
import About from './About'

const GameInfo = () => {
  return (
    <div style={styles.gameInfo}>
      <h1 style={styles.heading}>Elemental Poker</h1>
      <Info />
      <About />
    </div>
  )
};

let styles = {
  gameInfo: {
    flex: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column'
  },
  heading: {
    fontSize: '1.2em',
    fontWeight: 700,
    color: 'tan',
    margin: '.5em',
    alignSelf: 'start',
    background: 'rgba(38, 63, 38, 0.7)',
    borderBottomRightRadius: 10,
    padding: 10, 
  },
};
export default GameInfo;
