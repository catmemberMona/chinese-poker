import React from 'react';
import { Card } from '@material-ui/core';

const PlayersInfo = () => {
  return (
    <div style={styles.playersInfo}>
      <div>
        <Card style={styles.card}>
          <p>26</p>
        </Card>
        <p style={styles.playerName}>Amber the Computer</p>
      </div>
      <div>
        <Card style={styles.card}>
          <p>26</p>
        </Card>
        <p style={styles.playerName}>You</p>
      </div>
    </div>
  );
}

const RoundInfo = () => {
  return (
    <div style={styles.roundInfo}>
      <PlayersInfo />
      <div style={styles.controls}>
        <button style={styles.buttons}>Restart Game</button>
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
