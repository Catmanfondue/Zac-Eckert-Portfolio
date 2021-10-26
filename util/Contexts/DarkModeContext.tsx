import React, { useCallback, useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

let prefferedTheme: 'light' | 'dark' = 'light';

interface darkModeProps {
	toggleDarkMode: (value: boolean) => void;
	darkMode: boolean;
}

export const DarkModeContext = React.createContext<darkModeProps>({
	toggleDarkMode: () => {},
	darkMode: false,
});

export const DarkModeContextProvider = ({ children }: any) => {
	const [enabled, setEnabled] = useLocalStorage('dark-theme');
	const [isUsingDarkMode, setIsUsingDarkMode] = useState(enabled);

	const toggleDarkMode = useCallback(
		(value: boolean) => {
			let newValue = null;
			if (value !== undefined) {
				newValue = value;
			} else {
				newValue = !enabled;
			}
			setEnabled(newValue);
			setIsUsingDarkMode(newValue);
		},
		[enabled, setEnabled]
	);

	useEffect(() => {
		const className = 'dark';
		const bodyClass = window.document.body.classList;

		if (enabled) {
			bodyClass.add(className);
			toggleDarkMode(true);
		} else {
			bodyClass.remove(className);
			toggleDarkMode(false);
		}
	}, [enabled, setEnabled, isUsingDarkMode, toggleDarkMode]);

	return (
		<DarkModeContext.Provider
			value={{ darkMode: enabled, toggleDarkMode: toggleDarkMode }}
		>
			{children}
		</DarkModeContext.Provider>
	);
};
