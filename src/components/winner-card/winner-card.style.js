import styled, { keyframes } from "styled-components";

const fadeInBackground = keyframes`
  from {
	visibility: hidden;
    background-color: rgba(0, 0, 0, 0);
  }
  to {
	visibility: visible;

    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const bounceIn = keyframes`
  0% {
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

export const WinnerCardWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	width: 100%;
	position: absolute;
	visibility: hidden;
	cursor: pointer;

	animation: ${fadeInBackground} 0.3s ease 0.5s forwards;

	.win-indicator {
		display: flex;
		align-items: center;
		gap: 10px;
		transform: scale(0.3);
		animation: ${bounceIn} 0.6s ease 0.5s forwards;
		margin-top: 10px;

		span {
			font-size: 24px;
			font-weight: 600;
			text-align: end;
			color: white;
		}
	}
`;
