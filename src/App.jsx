import "./App.css";

import { useGameController } from "./hooks/useGameController.hook";
import { GameBoard, ScoreBoard, Timer, GameControls, WinnerCard, TableResults } from "./components";
import { GameWrapper } from "./components/ui";

function App() {
	const initialColors = {
		X: "#ff3b3b",
		O: "#3b9fff",
		board: "#444746",
		bg: "#000",
	};

	const { isPlaying, showTimer, board, currentPlayer, scores, drawCount, roundWinner, seriesWinner, ...fn } =
		useGameController(initialColors);

	return (
		<GameWrapper>
			<ScoreBoard {...scores} playing={currentPlayer} />
			<GameBoard {...{ isPlaying, board }} onCellClick={fn.makeMove} winner={roundWinner} goToNext={fn.nextRound} />

			{showTimer && <Timer resetKey={board.join("")} onFinish={fn.autoMove} />}
			<GameControls {...{ isPlaying }} handleStart={fn.startGame} handleRestart={fn.restartGame} />

			{seriesWinner && (
				<WinnerCard winner={seriesWinner} goToNext={fn.restartGame}>
					<TableResults {...{ drawCount, scores }} />
				</WinnerCard>
			)}
		</GameWrapper>
	);
}

export default App;
