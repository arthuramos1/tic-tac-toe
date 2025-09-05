import styled from "styled-components";

export const FloatingButton = styled.button`
	position: fixed;
	top: 16px;
	right: 16px;
	background: #444;
	border: none;
	border-radius: 50%;
	width: 48px;
	height: 48px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	color: white;

	&:hover {
		background: #666;
	}
`;

export const MenuPanelWrapper = styled.div`
	position: fixed;
	top: 72px;
	right: 16px;
	background: #222;
	padding: 16px;
	border-radius: 12px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
	color: white;
	display: flex;
	flex-direction: column;
	gap: 12px;
	z-index: 99;
`;

export const ColorRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	label {
		margin-right: 8px;
	}
	input[type="color"] {
		border: none;
		width: 36px;
		height: 24px;
		cursor: pointer;
		padding: 0;
	}
`;
