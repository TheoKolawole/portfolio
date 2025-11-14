'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for theme management
export const ThemeContext = createContext({
	theme: 'light',
	toggleTheme: () => {},
});

// Theme provider component (SSR-safe)
export const ThemeProvider = ({ children }) => {
	// Start with a safe default and hydrate on client
	const [theme, setTheme] = useState('light');

	// Hydrate theme from localStorage or OS preference on client
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setTheme(savedTheme);
			return;
		}

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		}
	}, []);

	// Function to toggle between themes
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	// Update localStorage and document class when theme changes (client-only)
	useEffect(() => {
		if (typeof window === 'undefined') return;

		localStorage.setItem('theme', theme);
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);
	}, [theme]);

	// Listen for system theme changes (client-only)
	useEffect(() => {
		if (typeof window === 'undefined' || !window.matchMedia) return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const handleChange = (e) => {
			if (!localStorage.getItem('theme')) {
				setTheme(e.matches ? 'dark' : 'light');
			}
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	}, []);

	const value = {
		theme,
		toggleTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

// Custom hook for using the theme
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
