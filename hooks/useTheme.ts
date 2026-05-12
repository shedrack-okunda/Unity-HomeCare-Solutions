import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
	const savedTheme = localStorage.getItem("theme") as Theme | null;

	if (savedTheme) return savedTheme;

	const systemDark = window.matchMedia(
		"(prefers-color-scheme: dark)",
	).matches;

	return systemDark ? "dark" : "light";
};

export const useTheme = () => {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useEffect(() => {
		const root = document.documentElement;

		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}

		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return {
		theme,
		darkMode: theme === "dark",
		toggleTheme,
	};
};
