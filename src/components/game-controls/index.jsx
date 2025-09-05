import PropTypes from "prop-types";
import { Play, RotateCcw } from "lucide-react";
import { GameControlsWrapper, GameControlsContent, RestartGameContent } from "./game-controls.style";

export const GameControls = ({ isPlaying, handleStart, handleRestart }) => {
	if (isPlaying) {
		return (
			<RestartGameContent onClick={handleRestart}>
				<RotateCcw color="#444746" size={20} />
				<p>Reiniciar jogo</p>
			</RestartGameContent>
		);
	}

	return (
		<GameControlsWrapper>
			<GameControlsContent onClick={handleStart}>
				<Play color="white" size={20} />
				<span>Iniciar</span>
			</GameControlsContent>
		</GameControlsWrapper>
	);
};

GameControls.propTypes = {
	isPlaying: PropTypes.bool.isRequired,
	handleStart: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired,
};
