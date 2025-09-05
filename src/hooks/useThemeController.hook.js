import { useState } from "react";
import { DEFAULT_THEME } from "../constants/theme.constants";

export const useThemeController = () => {
	const [theme, setTheme] = useState(DEFAULT_THEME);

	const updateColor = (key, value) => {
		setTheme(prev => ({ ...prev, [key]: value }));
	};

	return { theme, updateColor };
};
