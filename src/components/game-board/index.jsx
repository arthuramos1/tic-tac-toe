import React from "react";
import styled from "styled-components";

const Board = styled.div`
  width: min(90vmin, 520px);
  aspect-ratio: 1 / 1;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background: var(--board-bg, #ffffff);
  border-radius: 8px;
  overflow: hidden;

  background-color: #444746;
  gap: 10px;
`;

const Cell = styled.button`
  background: transparent;
  border: 0;
  width: 100%;
  height: 100%;
  font-size: clamp(2.2rem, 8vmin, 4.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  background-color: #1f1f1f;

  transition: ease-in 0.1s all;

  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.85;
  }
`;

import { getWinningLine } from "../../utils/game.utils";
import { Circle, X } from "lucide-react";
import { WinningLine, WinnerCardWrapper } from "./game-board.style";

const ValueIndicator = ({ value }) => {
  if (value === "O") return <Circle size={80} color="white" />;
  if (value === "X") return <X color="white" size={95} />;
  return <></>;
};

export default function GameBoard({
  board = Array(9).fill(null),
  onCellClick = () => {},
  winner,
}) {
  const winningLine = winner ? getWinningLine(board) : null;

  console.log(winningLine, "winningLine");

  const handleKey = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCellClick(idx);
    }
  };

  return (
    <Board role="grid" aria-label="Tabuleiro da Jogo da Velha">
      {board.map((val, idx) => (
        <Cell
          key={idx}
          onClick={() => onCellClick(idx)}
          onKeyDown={(e) => handleKey(e, idx)}
          disabled={!!val}
        >
          <ValueIndicator value={val} />
        </Cell>
      ))}

      {winningLine  && (
        <>
          <WinningLine type={winningLine.type} />
          {/* <WinnerCardWrapper >

          </WinnerCardWrapper> */}
        </>
      )}
    </Board>
  );
}
