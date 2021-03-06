import React from 'react'
import {Turn, Hand} from "./PlayerComponents"

const Player = () => {

  return (
    <div style={styles.player}>
      <Turn />
      <Hand />
    </div>
  )
}

let styles = {
  player: {
    flex: 10,
    flexDirection: 'column',
  },

};

export default Player