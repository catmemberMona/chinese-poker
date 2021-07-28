import React from 'react'
import { GameInfo, Table, RoundInfo } from './BoardComponents'

const Board = () => {

  return (
    <div style={styles.board}>
      <div style={styles.gameInfo}>
        <GameInfo />
      </div>
      <div style={styles.table}>
        <Table />
      </div>
      <div style={styles.roundInfo}>
        <RoundInfo />
      </div>

    </div>
  )
}

let styles = {
  board: {
    flex: 16,
    flexDirection: 'row',
  },
  gameInfo: {
    flex: 1,
    justifyContent: 'start',
  },
  table: {
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  roundInfo: {
    flex: 1,
    justifyContent: 'start',
  },
};

export default Board