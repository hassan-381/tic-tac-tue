import React from "react";
import Square from "./Square";

const Board = ({ board, onClick, winningLine }) => {
  return (
    <div className="grid grid-cols-3 gap-2 w-[270px] sm:w-[300px]">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinning={winningLine?.includes(index)}
        />
      ))}
    </div>
  );
};

export default Board;
