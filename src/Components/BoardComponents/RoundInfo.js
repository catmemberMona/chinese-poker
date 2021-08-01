import React from 'react';
import { Card } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { setFirstGameStateToFalse, toggleInGameState } from '../../store/reducers/gameReducer';

import deck from '../../Data/card'

const PlayersInfo = () => {
  return (
    <div style={styles.playersInfo}>
      <div>
        <Card style={styles.card} raised={true}>
          <p>26</p>
        </Card>
        <p style={styles.playerName}>Amber the Computer</p>
      </div>
      <div>
        <Card style={styles.card} raised={true}>
          <p>26</p>
        </Card>
        <p style={styles.playerName}>You</p>
      </div>
    </div>
  );
}

const shuffleAndSeperateCards = () => {

}

const RoundInfo = () => {
  let game = useSelector((state) => (state.game))
  let isFirstRound = game.isFirstGame
  let isInPlay = game.isInPlay

  let dispatch = useDispatch()

  const startRound = () => {
    if (isFirstRound) dispatch(setFirstGameStateToFalse());
    dispatch(toggleInGameState());

    // let [computerStack, playerStack] = shuffleAndSeperateCards()
    // dispatch to computer and player card stacks 

    // asign first player by who has the smallest 3

  }

  return (
    <div style={styles.roundInfo}>
      <PlayersInfo />
      <div style={styles.controls}>
        <button style={styles.buttons} onClick={startRound}>Start Game</button>
        <button style={styles.buttons}>Resuffle</button>
      </div>
    </div>
  );
};

let styles = {
  roundInfo: {
    flex: 0.9,
    flexDirection: 'column',
  },
  playersInfo: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: '.5em',
    paddingRight: '.5em',
  },
  card: {
    margin: 5,
    marginLeft: 8,
    minWidth: 30,
    maxHeight: 50,
    justifyContent: 'center',
  },
  playerName: {
    fontSize: '.8em',
    fontWeight: 600,
    color: 'tan',
    margin: 'auto',
    padding: 5,
    minWidth: '6.5em',
    background: 'rgba(38, 63, 38, 0.7)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  controls: {
    flex: 1.3,
    marginTop: '1em',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    width: 100,
    height: 50,
    borderRadius: 8,
    margin: 5,
  },
};

export default RoundInfo;
