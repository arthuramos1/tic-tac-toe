import PropTypes from "prop-types";
import { Circle, X } from "lucide-react";
import { useTheme } from "styled-components";

import { DRAW_KEY } from "../../constants/general.constants";
import { X_PLAYER, O_PLAYER } from "../../constants/players-values.constants";

import { WinnerCard } from "../winner-card";
import { getWinningLine } from "../../utils/game.utils";
import { WinningLine } from "./line-winner.style";
import { BoardWrapper, CellContainer } from "./game-board.style";

const ValueIndicator = ({ value }) => {
	const theme = useTheme();

	if (value === "O") return <Circle size={80} color={theme.O} />;
	if (value === "X") return <X size={95} color={theme.X} />;
	return null;
};

ValueIndicator.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

export const GameBoard = ({ isPlaying, winner, goToNext, board, onCellClick }) => {
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
				<CellContainer
					key={idx}
					onClick={() => onCellClick(idx)}
					onKeyDown={e => handleKey(e, idx)}
					disabled={!!val || !isPlaying}
				>
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

GameBoard.propTypes = {
	isPlaying: PropTypes.bool.isRequired,
	winner: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
	goToNext: PropTypes.func.isRequired,
	board: PropTypes.arrayOf(PropTypes.oneOf([X_PLAYER, O_PLAYER, null])).isRequired,
	onCellClick: PropTypes.func,
};

GameBoard.defaultProps = {
	onCellClick: () => {},
};
