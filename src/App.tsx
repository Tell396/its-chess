import React, { useState, useEffect } from 'react';

import BoardComponent from './components/BoardComponent';

import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';

import './App.css';

function App() {
  const [board, setBoard] = useState(new Board());
  
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
    </div>
  );
}

export default App;
