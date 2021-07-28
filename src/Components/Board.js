import React from 'react'
import { Title, Table, Players } from './BoardComponents'

const Board = () => {

  return (
    <div style={styles.board}>
      <div style={styles.title}>
        <Title />
      </div>
      <div style={styles.table}>
        <Table />
      </div>
      <div style={styles.players}>
        <Players />
      </div>

    </div>
  )
}

let styles = {
  board: {
    flex: 16,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    justifyContent: 'start',
  },
  table: {
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
  players: {
    flex: 1,
    justifyContent: 'start',
  },
};

export default Board