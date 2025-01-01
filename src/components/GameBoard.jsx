import { Square } from "./Square";

export function GameBoard({ board, updateBoard, resetGame }) {
  return (
    <div>
      <button onClick={resetGame}>Reset game</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
    </div>
  );
}
