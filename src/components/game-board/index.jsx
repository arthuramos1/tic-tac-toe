import { Circle, X } from "lucide-react";
import { DRAW_KEY } from "../../constants/general.constants";
import { X_PLAYER, O_PLAYER } from "../../constants/players-values.constants";

import { WinnerCard } from "../winner-card";
import { getWinningLine } from "../../utils/game.utils";
import { WinningLine } from "./line-winner.style";
import { BoardWrapper, CellContainer } from "./game-board.style";

const ValueIndicator = ({ value }) => {
	if (value === O_PLAYER) return <Circle size={80} color="white" />;
	if (value === X_PLAYER) return <X color="white" size={95} />;
	return <></>;
};

export const GameBoard = ({ winner, goToNext, board, onCellClick = () => {} }) => {
	const winningLine = winner ? getWinningLine(board) : null;

	const handleKey = (e, idx) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onCellClick(idx);
		}
	};

	return (
		<BoardWrapper role="grid" aria-label="Tic tae toe">
			{board.map((val, idx) => (
				<CellContainer key={idx} onClick={() => onCellClick(idx)} onKeyDown={e => handleKey(e, idx)} disabled={!!val}>
					<ValueIndicator value={val} />
				</CellContainer>
			))}

			{winningLine && (
				<>
					<WinningLine type={winningLine.type} />
					<WinnerCard winner={winner} goToNext={goToNext} />
				</>
			)}

			{winner === DRAW_KEY && <WinnerCard winner={winner} goToNext={goToNext} />}
		</BoardWrapper>
	);
};
