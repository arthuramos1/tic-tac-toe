import styled from "styled-components";

export const ScoreboardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 10px 10px;
	margin-bottom: 20px;
	border-bottom: 2px solid #444746;
`;

export const PlayerPointsContainer = styled.div.withConfig({
	shouldForwardProp: prop => prop !== "activated",
})`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	gap: 100px;
	border: 2px solid #444746;
	border-bottom-color: ${({ activated, isX, theme }) => (activated ? (isX ? theme.X : theme.O) : "transparent")};
	border-radius: 14px;
	padding: 6px 32px 6px 24px;

	span {
		font-size: 24px;
		font-weight: 600;
		text-align: end;
		width: 36px;
	}
`;
