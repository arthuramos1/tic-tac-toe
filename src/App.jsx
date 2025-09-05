import "./App.css";

import { useGameController } from "./hooks/useGameController.hook";

import { GameBoard } from "./components/game-board";
import { ScoreBoard } from "./components/score-board";
import { Timer } from "./components/timer";
import { GameControls } from "./components/game-controls";
import { GameWrapper } from "./components/ui/game-wrapper.styles";

function App() {
	const initialColors = {
		X: "#ff3b3b",
		O: "#3b9fff",
		board: "#444746",
		bg: "#000",
	};

	const {
		matchWinner,
		isPlaying,
		board,
		showTimer,
		currentPlayer,
		scores,
		// winner,
		colors,
		// setColors,
		...fn
	} = useGameController(initialColors);

	console.log(matchWinner, "matchWinner");

	return (
		<GameWrapper>
			<ScoreBoard {...scores} playing={currentPlayer} />
			<GameBoard board={board} onCellClick={fn.makeMove} colors={colors} winner={matchWinner} goToNext={fn.goToNext} />

			{showTimer && <Timer resetKey={board.join("")} onFinish={fn.autoMove} />}
			<GameControls {...{ isPlaying }} handleStart={fn.handleStart} handleRestart={fn.handleRestart} />
		</GameWrapper>
	);
}

export default App;
