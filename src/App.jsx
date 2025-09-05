import "./App.css";

import { useGameController } from "./hooks/useGameController.hook";

import { GameBoard } from "./components/game-board";
import { ScoreBoard } from "./components/score-board";
import { Timer } from "./components/timer";
import { GameControls } from "./components/game-controls";
import { GameWrapper } from "./components/ui/game-wrapper.styles";
import { WinnerCard } from "./components/winner-card";
import { TableResults } from "./components/table-results";

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
