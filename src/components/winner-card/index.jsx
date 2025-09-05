import { Circle, X, PartyPopper, Handshake } from "lucide-react";
import { DRAW_KEY } from "../../constants/general.constants";
import { X_PLAYER } from "../../constants/players-values.constants";
import { WinnerCardWrapper } from "./winner-card.style";

const IndicatorWin = ({ winner }) => {
	if (winner === DRAW_KEY) return null;
	if (winner === X_PLAYER) return <X size={90} color="white" />;
	return <Circle size={80} color="white" />;
};

export const WinnerCard = ({ winner, goToNext }) => {
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
		</WinnerCardWrapper>
	);
};
