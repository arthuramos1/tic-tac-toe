import styled from "styled-components";

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
