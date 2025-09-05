import PropTypes from "prop-types";
import { TableResultsWrapper } from "./table-results.style";
import { Row } from "../ui";

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

TableResults.propTypes = {
	drawCount: PropTypes.number.isRequired,
	scores: PropTypes.shape({
		X: PropTypes.number.isRequired,
		O: PropTypes.number.isRequired,
	}).isRequired,
};
