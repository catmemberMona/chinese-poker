import React from 'react';
import { Card } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { setFirstGameStateToFalse, toggleInGameState } from '../../store/reducers/gameReducer';
import { givePlayerStack } from '../../store/reducers/playerReducer';
import { giveComputerStack } from '../../store/reducers/computerReducer'
import { resetGame } from '../../store/reducers';

import createDeck from '../../Data/card'

const PlayersInfo = () => {
  let cardsRemainingCountForPlayer = useSelector(state => state.player.cardsLeft)
  let cardsRemainingCountForComputer = useSelector(state => state.computer.cardsLeft)

  return (
    <div style={styles.playersInfo}>
      <div>
        <Card style={styles.card} raised={true}>
          <p>{cardsRemainingCountForComputer}</p>
        </Card>
        <p style={styles.playerName}>Amber the Computer</p>
      </div>
      <div>
        <Card style={styles.card} raised={true}>
          <p>{cardsRemainingCountForPlayer}</p>
        </Card>
        <p style={styles.playerName}>You</p>
      </div>
    </div>
  );
}

const shuffleAndSeperateCards = (deck) => {
  let randomIndices = []

  for (let i = 0; i < deck.length / 2; i++){
    let randomInt = -1
    do {
      randomInt = Math.floor(Math.random() * deck.length);
    } while (randomIndices.includes(randomInt))
    
    randomIndices.push(randomInt)
  }

  randomIndices.sort((a,b) => a - b)

  let computerStack = []
  let playerStack = []
  let indexPointer = 0

  for (let i = 0; i < deck.length; i++) {
    if (randomIndices[indexPointer] === i) {
      computerStack.push(deck[i])
      indexPointer+=1
    } else {
      playerStack.push(deck[i])
    }
  }

  return [computerStack, playerStack]
}

const RoundInfo = () => {
  let game = useSelector((state) => (state.game))
  let isFirstRound = game.isFirstGame
  let isInPlay = game.isInPlay

  let dispatch = useDispatch()

  const startRound = () => {
    if (isFirstRound) dispatch(setFirstGameStateToFalse());
    dispatch(toggleInGameState());

    const deck = createDeck();

    let [computerStack, playerStack] = shuffleAndSeperateCards(deck)
    // dispatch to computer and player card stacks 
    dispatch(givePlayerStack(playerStack.sort((a, b) => a.id - b.id)));
    dispatch(giveComputerStack(computerStack.sort((a, b) => a.id - b.id)));

    // asign first player by who has the smallest 3

  }

  const reStart = () => {
    dispatch(resetGame());
    startRound()
  };

  return (
    <div style={styles.roundInfo}>
      <PlayersInfo />
      <div style={styles.controls}>
        <button
          style={{
            ...styles.buttons,
            visibility: `${!isInPlay ? 'visible' : 'hidden'}`,
          }}
          onClick={startRound}
        >
          {isFirstRound ? 'Start Game' : 'Play Again'}
        </button>
        <button
          style={{
            ...styles.buttons,
            visibility: `${isInPlay ? 'visible' : 'hidden'}`,
          }}
          onClick={reStart}
        >
          Reshuffle
        </button>
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
  reshuffle: {
    width: 100,
    height: 50,
    borderRadius: 8,
    margin: 5,

  },
};

export default RoundInfo;
