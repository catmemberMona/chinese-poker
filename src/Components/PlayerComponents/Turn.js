import React from 'react';
import Place from './Place'
import { useDispatch, useSelector } from 'react-redux';
import { updateCardsOnTable, clearTable } from '../../store/reducers/tableReducer'
import {
  toggleInGameState,
  setToComputersTurn,
} from '../../store/reducers/gameReducer';
import computer from '../../Computer';



const Message = () => {
  return <div style={styles.message}>
    <p style={styles.text}>This is your turn. Select and place your card(s).</p>
  </div>
}

const Choice = () => {
  const dispatch = useDispatch();

  // computer
  const computerHand = useSelector((state) => state.computer.hand);
  const table = useSelector((state) => state.table);

  //

  const isPlayersTurn = useSelector((state) => state.game.isPlayersTurn);
  const isInPlay = useSelector((state) => state.game.isInPlay);
  
  // Should be called when re-rendered after dispatching new state of isPlayersTurn
  if (!isPlayersTurn && isInPlay) {
        console.log('THIS IS NOW THE COMPUTERS TURN');
    computer.computerPlays(table, computerHand, dispatch);
  }

  const passTurn = () => {
    // remove cards on table
    dispatch(clearTable());
    dispatch(setToComputersTurn());
  };

  return (
    <div style={styles.choice}>
      <Place />
      <button
        style={{
          ...styles.buttons,
          display: `${isInPlay ? 'block' : 'none'}`,
        }}
        onClick={passTurn}
      >
        Pass
      </button>
    </div>
  );
};

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
    paddingLeft: '20vw',
    justifyContent: 'center',
    alignItems: 'center',
  },
  choice: {
    flex: 2,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: '2vh',
    fontWeight: 600,
    color: 'brown',

  },
  buttons: {
    width: 100,
    height: 35,
    borderRadius: 8,
    margin: 3,
  },
};

export default Turn;
