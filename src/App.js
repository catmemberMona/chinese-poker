import './App.css';
import React, {useState} from 'react';
import { Board, Player, Footer } from './Components'

function App() {

  // Init State
  const [isFirstGame, toggleIsFirstGame] = useState(false)
  const [isPlaying, toggleIsPlaying] = useState(false)
  const [playerStats, updatePlayerStats] = useState({
    cards: [],
    totalCards: 0
  })
  const [computerStats, updateComputerStats] = useState({
    cards: [],
    totalCards: 0,
  });
  const [cardsLastPlayed, newCardsPlayed] = useState([])

  return (
    <div className="App" style={styles.app} >
      <Board />
      <Player />
      {/* <Footer /> */}
    </div>
  );
}

let styles = {
  app: {
    flex: 1,
    flexDirection: "column",
    height: "100vh",
    width: "100vw",

  },
  


}

export default App;
