import PropTypes from "prop-types";
import { Circle, X } from "lucide-react";
import { X_PLAYER, O_PLAYER } from "../../constants/players-values.constants";
import { ScoreboardWrapper, PlayerPointsContainer } from "./score-board.style";

export const ScoreBoard = ({ X: xPoints, O: oPoints, playing }) => {
	return (
		<ScoreboardWrapper>
			<PlayerPointsContainer activated={playing === O_PLAYER}>
				<Circle color="white" size={20} />
				<span>{oPoints === 0 ? "-" : oPoints}</span>
			</PlayerPointsContainer>

			<PlayerPointsContainer activated={playing === X_PLAYER}>
				<X color="white" size={25} />
				<span>{xPoints === 0 ? "-" : xPoints}</span>
			</PlayerPointsContainer>
		</ScoreboardWrapper>
	);
};

ScoreBoard.propTypes = {
	X: PropTypes.number.isRequired,
	O: PropTypes.number.isRequired,
	playing: PropTypes.oneOf([X_PLAYER, O_PLAYER]).isRequired,
};
