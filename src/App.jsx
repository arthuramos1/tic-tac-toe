import "./App.css";
import { useCallback } from "react";

import { useGameController } from "./hooks/useGameController.hook";
import { GameBoard, ScoreBoard, Timer, GameControls, WinnerCard, TableResults } from "./components";
import { GameWrapper } from "./components/ui";

function App() {
	const {
		isPlaying,
		showTimer,
		board,
		currentPlayer,
		scores,
		drawCount,
		roundWinner,
		seriesWinner,
		makeMove,
		autoMove,
		startGame,
		restartGame,
		nextRound,
	} = useGameController();

	const handleCellClick = useCallback(
		index => {
			makeMove(index);
		},
		[makeMove]
	);

	return (
		<GameWrapper>
			<ScoreBoard X={scores.X} O={scores.O} playing={currentPlayer} />

			<GameBoard
				isPlaying={isPlaying}
				board={board}
				winner={roundWinner}
				goToNext={nextRound}
				onCellClick={handleCellClick}
			/>

			{showTimer && <Timer resetKey={board.join("")} onFinish={autoMove} />}

			<GameControls isPlaying={isPlaying} handleStart={startGame} handleRestart={restartGame} />

			{seriesWinner && (
				<WinnerCard winner={seriesWinner} goToNext={restartGame}>
					<TableResults drawCount={drawCount} scores={scores} />
				</WinnerCard>
			)}
		</GameWrapper>
	);
}

export default App;
