import styled from "styled-components";

export const GameControlsWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 0 10px 20px;
	margin-bottom: 20px;
	margin-top: 10px;
	border-bottom: 2px solid #444746;
`;

export const GameControlsContent = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	color: white;
	border: 2px solid #444746;
	padding: 6px 12px;
	border-radius: 4px;
	cursor: pointer;
	transition: ease-in 0.2s all;

	&:hover {
		filter: brightness(200%);
	}

	span {
		font-size: 20px;
		font-weight: 600;
		text-align: end;
	}
`;

export const RestartGameContent = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	transition: ease-in 0.2s all;

	p {
		font-size: 20px;
		font-weight: 600;
		color: #444746;
	}

	&:hover {
		filter: brightness(600%);
	}
`;
