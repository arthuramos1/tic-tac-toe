import styled from "styled-components";

const ColorMenu = styled.div`
	position: fixed;
	top: 16px;
	right: 16px;
	background: #222;
	padding: 12px;
	border-radius: 8px;
	color: white;
	z-index: 100;
`;

export const ThemeMenu = ({ updateColor }) => {
	return (
		<ColorMenu>
			<div>
				<label>X Color</label>
				<input type="color" onChange={e => updateColor("X", e.target.value)} />
			</div>
			<div>
				<label>O Color</label>
				<input type="color" onChange={e => updateColor("O", e.target.value)} />
			</div>
			<div>
				<label>Board Color</label>
				<input type="color" onChange={e => updateColor("board", e.target.value)} />
			</div>
			<div>
				<label>Background</label>
				<input type="color" onChange={e => updateColor("bg", e.target.value)} />
			</div>
		</ColorMenu>
	);
};
