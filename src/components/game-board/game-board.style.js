import styled from "styled-components";

export const BoardWrapper = styled.div`
	width: min(90vmin, 520px);
	aspect-ratio: 1 / 1;
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	background: var(--board-bg, #ffffff);
	border-radius: 8px;
	overflow: hidden;
	background-color: #444746;
	gap: 10px;
`;

export const CellContainer = styled.button`
	background: transparent;
	border: 0;
	width: 100%;
	height: 100%;
	font-size: clamp(2.2rem, 8vmin, 4.5rem);
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	user-select: none;
	background-color: #1f1f1f;
	transition: ease-in 0.1s all;

	&:hover:not(:disabled) {
		background-color: rgba(255, 255, 255, 0.1);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.85;
	}
`;
