import styled from "styled-components";

export const TableResultsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 20px 30px;
	background-color: #1f1f1f;
	border: 2px solid #444746;
	border-radius: 12px;
	color: white;
	font-family: Arial, sans-serif;
	width: fit-content;
	margin-top: 20px;
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	font-weight: 500;

	span.label {
		flex: 1;
	}

	span.value {
		font-weight: 600;
		min-width: 40px;
		text-align: right;
	}
`;
