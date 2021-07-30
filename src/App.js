import './App.css';
import { Board, Player, Footer } from './Components'
import {createDeck} from './Data/card'

function App() {
  const deck = createDeck()
  console.log(deck)
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
