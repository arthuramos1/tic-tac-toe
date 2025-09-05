import { useState } from "react";
import PropTypes from "prop-types";
import { Settings } from "lucide-react";

import { DEFAULT_THEME } from "../../constants/theme.constants";
import { FloatingButton, MenuPanelWrapper, ColorRow } from "./theme-menu.style";

export const ThemeMenu = ({ updateColor }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<FloatingButton onClick={() => setOpen(prev => !prev)}>
				<Settings size={24} />
			</FloatingButton>

			{open && (
				<MenuPanelWrapper>
					<ColorRow>
						<label>X Color</label>
						<input type="color" defaultValue={DEFAULT_THEME.X} onChange={e => updateColor("X", e.target.value)} />
					</ColorRow>
					<ColorRow>
						<label>O Color</label>
						<input type="color" defaultValue={DEFAULT_THEME.O} onChange={e => updateColor("O", e.target.value)} />
					</ColorRow>
					<ColorRow>
						<label>Board Color</label>
						<input
							type="color"
							defaultValue={DEFAULT_THEME.board}
							onChange={e => updateColor("board", e.target.value)}
						/>
					</ColorRow>
					<ColorRow>
						<label>Board Lines</label>
						<input
							type="color"
							defaultValue={DEFAULT_THEME.boardLines}
							onChange={e => updateColor("boardLines", e.target.value)}
						/>
					</ColorRow>
					<ColorRow>
						<label>Line Winner</label>
						<input
							type="color"
							defaultValue={DEFAULT_THEME.lineWinner}
							onChange={e => updateColor("lineWinner", e.target.value)}
						/>
					</ColorRow>
				</MenuPanelWrapper>
			)}
		</>
	);
};

ThemeMenu.propTypes = {
	updateColor: PropTypes.func.isRequired,
};
