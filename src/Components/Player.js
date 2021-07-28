import React from 'react'
import {Turn, Hand} from "./PlayerComponents"

const Player = () => {

  return (
    <div style={styles.player}>
      <Turn style={styles.turn}/>
      <Hand style={ styles.Hand}/>
    </div>
  )
}

let styles = {
  player: {
    flex: 7,
    flexDirection: 'column',
  },
  turn: {
    flex: 1,
  },
  hand: {
    flex: 3,
    flexDirection: 'row',
  },
};

export default Player