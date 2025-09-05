import PropTypes from "prop-types";
import { Circle, X } from "lucide-react";
import { useTheme } from "styled-components";

import { X_PLAYER, O_PLAYER } from "../../constants/players-values.constants";
import { ScoreboardWrapper, PlayerPointsContainer } from "./score-board.style";

export const ScoreBoard = ({ X: xPoints, O: oPoints, playing }) => {
	const theme = useTheme();

	return (
		<ScoreboardWrapper>
			<PlayerPointsContainer activated={playing === O_PLAYER}>
				<Circle color={theme.O} size={20} />
				<span>{oPoints === 0 ? "-" : oPoints}</span>
			</PlayerPointsContainer>

			<PlayerPointsContainer isX activated={playing === X_PLAYER}>
				<X color={theme.X} size={25} />
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
