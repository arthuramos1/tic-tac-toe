import styled, { keyframes } from "styled-components";

const shrinkBar = keyframes`
  from { transform: scaleX(1); }
  to   { transform: scaleX(0); }
`;

export const TimerWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	padding: 0 10px 20px;
	margin-top: 12px;
	border-bottom: 2px solid #444746;
`;

export const ClockContent = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 40px;
	color: white;
	border: 2px solid #444746;
	border-bottom: 0;
	border-radius: 14px;
	padding: 6px 32px 12px 24px;
	overflow: hidden;

	span {
		font-size: 20px;
		font-weight: 600;
		text-align: end;
		width: 36px;
	}

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		height: 2px;
		width: 100%;
		background: white;
		transform-origin: left center;
		animation: ${shrinkBar} 5s linear forwards;
	}
`;
