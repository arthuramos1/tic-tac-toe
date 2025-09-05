import { TableResultsWrapper, Row } from "./table-results.style";

export const TableResults = ({ drawCount, scores }) => {
	return (
		<TableResultsWrapper>
			<Row>
				<span className="label">Empates</span>
				<span className="value">{drawCount === 0 ? "-" : drawCount}</span>
			</Row>
			<Row>
				<span className="label">Pontos X</span>
				<span className="value">{scores?.X === 0 ? "-" : scores?.X}</span>
			</Row>
			<Row>
				<span className="label">Pontos O</span>
				<span className="value">{scores?.O === 0 ? "-" : scores?.O}</span>
			</Row>
		</TableResultsWrapper>
	);
};
