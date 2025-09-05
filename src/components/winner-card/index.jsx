import { Circle, X, PartyPopper } from "lucide-react";
import { X_PLAYER } from "../../constants/players-values.constants";
import { WinnerCardWrapper } from "./winner-card.style";

export const WinnerCard = ({ winner, goToNext }) => {
	console.log(winner, "winner");

	return (
		<WinnerCardWrapper onClick={goToNext}>
			{winner === X_PLAYER ? <X size={90} color="white" /> : <Circle size={80} color="white" />}

			<div className="win-indicator">
				<PartyPopper color="white" size={24} />
				<span>Vencedor</span>
			</div>
		</WinnerCardWrapper>
	);
};
