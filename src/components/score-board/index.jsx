import { Circle, X } from "lucide-react";
import { ScoreboardWrapper, PlayerPointsContainer } from "./score-board.style";

export const ScoreBoard = ({ X: xPoints, O: oPoints, playing }) => {
  return (
    <ScoreboardWrapper>
      <PlayerPointsContainer activated={playing === "O"}>
        <Circle color="white" size={20}/>
        <span>{xPoints === 0 ? "-" : xPoints}</span>
      </PlayerPointsContainer>

      <PlayerPointsContainer activated={playing === "X"}>
        <X color="white" size={25}/>
        <span>{oPoints === 0 ? "-" : oPoints}</span>
      </PlayerPointsContainer>
    </ScoreboardWrapper>
  );
};
