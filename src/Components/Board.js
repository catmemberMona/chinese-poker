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
    flex: .8,
  },
  table: {
    flex: 4.4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  roundInfo: {
    flex: .8,
    justifyContent: 'flex-end',
  },
};

export default Board