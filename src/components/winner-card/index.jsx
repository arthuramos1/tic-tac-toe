import PropTypes from "prop-types";
import { Circle, X, PartyPopper, Handshake } from "lucide-react";
import { useTheme } from "styled-components";

import { DRAW_KEY } from "../../constants/general.constants";
import { X_PLAYER } from "../../constants/players-values.constants";
import { WinnerCardWrapper } from "./winner-card.style";

const IndicatorWin = ({ winner }) => {
	const theme = useTheme();

	if (winner === DRAW_KEY) return null;
	if (winner === X_PLAYER) return <X size={90} color={theme.X} />;
	return <Circle size={80} color={theme.O} />;
};

IndicatorWin.propTypes = {
	winner: PropTypes.string.isRequired,
};

export const WinnerCard = ({ winner, goToNext, children }) => {
	return (
		<WinnerCardWrapper onClick={goToNext}>
			<IndicatorWin winner={winner} />

			{winner === DRAW_KEY ? (
				<div className="win-indicator">
					<Handshake color="white" size={24} />
					<span>Empate!</span>
				</div>
			) : (
				<div className="win-indicator">
					<PartyPopper color="white" size={24} />
					<span>Vencedor</span>
				</div>
			)}

			{!!children && children}

			<p>Clique em qualquer lugar.</p>
		</WinnerCardWrapper>
	);
};

WinnerCard.propTypes = {
	winner: PropTypes.string.isRequired,
	goToNext: PropTypes.func.isRequired,
	children: PropTypes.node,
};
