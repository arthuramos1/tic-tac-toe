import "./App.css";
import { useCallback } from "react";
import { ThemeProvider } from "styled-components";

import { useGameController } from "./hooks/useGameController.hook";
import { useThemeController } from "./hooks/useThemeController.hook";

import { GameBoard, ScoreBoard, Timer, GameControls, WinnerCard, TableResults, ThemeMenu } from "./components";
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

	const { theme, updateColor } = useThemeController();

	const handleCellClick = useCallback(
		index => {
			makeMove(index);
		},
		[makeMove]
	);

	return (
		<ThemeProvider theme={theme}>
			<GameWrapper>
				<div className="game-container">
					<ThemeMenu updateColor={updateColor} />

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
				</div>
			</GameWrapper>
		</ThemeProvider>
	);
}

export default App;
