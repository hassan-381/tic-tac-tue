import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const result = calculateWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
    } else if (!newBoard.includes(null)) {
      setWinner("Draw");
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-400 text-white p-4">
      <div className="border-2 border-gray-600 p-6 rounded-lg md:px-15 px-12 lg:px-20  bg-gray-600 shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-center">Tic Tac Toe</h1>

        <div
          className={`text-xl font-semibold mb-6 transition-all duration-500 ${
            winner === "Draw"
              ? "text-red-400"
              : winner
              ? "text-green-400"
              : "text-blue-400"
          }`}
        >
          {winner
            ? winner === "Draw"
              ? " It's a Draw!"
              : `🎉 Player ${winner} Wins!`
            : `⏱ Current Turn: ${xIsNext ? "X" : "O"}`}
        </div>

        <Board board={board} onClick={handleClick} winningLine={winningLine} />

        <button
          onClick={resetGame}
          className="mt-8 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition text-white font-semibold rounded shadow-lg"
        >
          🔄Reset Game
        </button>
      </div>
    </div>
  );
};

export default App;
