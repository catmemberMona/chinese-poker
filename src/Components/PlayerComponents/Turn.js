import React from 'react';


const Message = () => {
  return <div style={styles.message}>
    <p style={styles.text}>This is your turn. Select and place your card(s).</p>
  </div>
}

const Choice = () => {
  return <div style={styles.choice}>
    <button style={styles.buttons}>Place</button>
    <button style={styles.buttons}>Pass</button>
  </div>
}

const Turn = () => {
  return <div style={styles.turn}>
    <Message />
    <Choice />
  </div>;
};

let styles = {
  turn: {
    flex: 1,
    flexWrap: 'wrap',
  },
  message: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  choice: {
    flex: 2,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: '.85em',
    fontWeight: 600,
    color: 'green',

  },
  buttons: {
    width: 100,
    height: 35,
    borderRadius: 8,
    margin: 3,
  },
};

export default Turn;
