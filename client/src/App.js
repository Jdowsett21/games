import React, { Fragment } from 'react';
import BingoCustomizer from './components/BingoCustomizer';
import BingoGrid from './components/BingoGrid';
import Home from './components/Home';
import GameState from './context/gameContext/GameState';
import All from './pages/All';
import Strategies from './pages/Strategies';
import SpellBound from './games/Words/SpellBound';
import Crossword from './games/Words/Crossword';
import DailyCrossword from './games/Words/DailyCrossword';
import Bridge from './games/Cards/Bridge';
import Solitaire from './games/Cards/Solitaire';
import BlackJack from './games/Cards/BlackJack';
import Scramble from './games/Words/Scramble';
import Mahjong from './games/Strategy/Mahjong';
import Sudoku from './games/Puzzles/Sudoku';
import Trizzle from './games/Puzzles/Trizzle';
import Jigsaw from './games/Puzzles/Jigsaw';
import BlockChamp from './games/Strategy/BlockChamp';
import Cards from './pages/Cards';
import Words from './pages/Words';
import Header from './components/common/Header';
import Puzzles from './pages/Puzzles';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <GameState>
      <Router>
        <div className='bg'>
          <Header />
          <main className='container'>
            <Route exact path='/Words/Spellbound' component={SpellBound} />
            <Route
              exact
              path='/Words/DailyCrossword'
              component={DailyCrossword}
            />
            <Route exact path='/Scramble' component={Scramble} />
            <Route exact path='/Crossword' component={Crossword} />
            <Route exact path='/Blockchamp' component={BlockChamp} />;
            <Route exact path='/Mahjong' component={Mahjong} />
            <Route exact path='/Sudoku' component={Sudoku} />
            <Route exact path='/Trizzle' component={Trizzle} />
            <Route exact path='/Jigsaw' component={Jigsaw} />
            <Route exact path='/BlackJack' component={BlackJack} />
            <Route exact path='/Bridge' component={Bridge} />
            <Route exact path='/Solitaire' component={Solitaire} />
            <Route exact path='/cards' component={Cards} />
            <Route exact path='/strategy' component={Strategies} />
            <Route exact path='/words' component={Words} />
            <Route exact path='/all' component={All} />
            <Route exact path='/puzzles' component={Puzzles} />
            <Route exact path='/customize' component={BingoCustomizer} />
            <Route exact path='/grid' component={BingoGrid} />
            <Route exact path='/' component={Home} />
          </main>
        </div>
      </Router>
    </GameState>
  );
}

export default App;
