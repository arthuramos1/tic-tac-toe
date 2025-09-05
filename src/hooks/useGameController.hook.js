import { useState } from "react";
import { DRAW_KEY } from "../constants/general.constants";
import { checkWinner, getEmptyCells } from "../utils/game.utils";

export const useGameController = (initialColors, maxScore = 11) => {
	const [isPlaying, setIsPlayng] = useState(false);
	const [showTimer, setShowTimer] = useState(false);

	const [board, setBoard] = useState(Array(9).fill(null));
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [scores, setScores] = useState({ X: 0, O: 0 });
	const [winner, setWinner] = useState(null);
	const [matchWinner, seMatchtWinner] = useState(null);
	const [colors, setColors] = useState(initialColors);

	const resetBoard = () => {
		setBoard(Array(9).fill(null));
		seMatchtWinner(null);
	};

	const resetScores = () => {
		setScores({ X: 0, O: 0 });
		setWinner(null);
	};

	const makeMove = index => {
		if (!isPlaying) return;
		if (board[index] || winner) return;
		const newBoard = [...board];
		newBoard[index] = currentPlayer;
		setBoard(newBoard);

		const result = checkWinner(newBoard);
		if (result) {
			setScores(prev => ({ ...prev, [result]: prev[result] + 1 }));
			if (scores[result] + 1 >= maxScore) {
				setWinner(result);
			}

			seMatchtWinner(result);
			setShowTimer(false);
		} else if (newBoard.every(Boolean)) {
			seMatchtWinner(DRAW_KEY);
			setShowTimer(false);
		} else {
			setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
		}
	};

	const autoMove = () => {
		const emptyCells = getEmptyCells(board);
		if (emptyCells.length === 0) return;
		const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
		makeMove(randomIndex);
	};

	const handleStart = () => {
		setIsPlayng(true);
		setShowTimer(true);
	};

	const handleRestart = () => {
		setIsPlayng(false);
		setShowTimer(false);
		resetBoard();
		resetScores();
	};

	const goToNext = () => {
		seMatchtWinner(null);
		setShowTimer(true);
		resetBoard();
	};

	return {
		showTimer,
		isPlaying,
		board,
		matchWinner,
		currentPlayer,
		scores,
		winner,
		colors,
		setColors,
		makeMove,
		autoMove,
		resetBoard,
		resetScores,
		handleStart,
		handleRestart,
		goToNext,
	};
};
