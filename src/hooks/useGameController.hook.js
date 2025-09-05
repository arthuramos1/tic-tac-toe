import { useState } from "react";
import { DRAW_KEY, MAX_SCORE } from "../constants/general.constants";
import { X_PLAYER, O_PLAYER } from "../constants/players-values.constants";
import { checkWinner, getEmptyCells } from "../utils/game.utils";

export const useGameController = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [showTimer, setShowTimer] = useState(false);

	const [board, setBoard] = useState(Array(9).fill(null));
	const [currentPlayer, setCurrentPlayer] = useState(X_PLAYER);

	const [scores, setScores] = useState({ X: 0, O: 0 });
	const [drawCount, setDrawCount] = useState(0);

	const [roundWinner, setRoundWinner] = useState(null);
	const [seriesWinner, setSeriesWinner] = useState(null);

	const resetBoard = () => setBoard(Array(9).fill(null));

	const resetScores = () => {
		setScores({ X: 0, O: 0 });
		setDrawCount(0);
		setSeriesWinner(null);
	};

	const resetAll = () => {
		resetBoard();
		resetScores();
		setRoundWinner(null);
		setIsPlaying(false);
		setShowTimer(false);
		setCurrentPlayer(X_PLAYER);
	};

	const makeMove = index => {
		if (!isPlaying || roundWinner || board[index]) return;

		const newBoard = [...board];
		newBoard[index] = currentPlayer;
		setBoard(newBoard);

		const result = checkWinner(newBoard);

		if (result) {
			setScores(prev => {
				const newScores = { ...prev, [result]: prev[result] + 1 };

				if (newScores[result] >= MAX_SCORE) {
					setSeriesWinner(result);
				}

				return newScores;
			});

			setRoundWinner(result);
			setShowTimer(false);
		} else if (newBoard.every(Boolean)) {
			setRoundWinner(DRAW_KEY);
			setDrawCount(p => p + 1);
			setShowTimer(false);
		} else {
			setCurrentPlayer(currentPlayer === X_PLAYER ? O_PLAYER : X_PLAYER);
		}
	};

	const autoMove = () => {
		const emptyCells = getEmptyCells(board);
		if (emptyCells.length === 0) return;

		const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
		makeMove(randomIndex);
	};

	const startGame = () => {
		setIsPlaying(true);
		setShowTimer(true);
		resetBoard();
		setRoundWinner(null);
	};

	const restartGame = () => resetAll();

	const nextRound = () => {
		setRoundWinner(null);
		resetBoard();

		if (!seriesWinner) {
			setShowTimer(true);
			setCurrentPlayer(X_PLAYER);
		}
	};

	return {
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
	};
};
