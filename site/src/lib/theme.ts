/**
 * Shared theme management utilities.
 *
 * These functions form the single source of truth for the site's
 * light/dark theme behaviour. They are designed to be safe to call
 * in any environment (browser, SSR, Astro frontmatter) and to be
 * tree-shakable when imported by client scripts.
 */

export const THEME_STORAGE_KEY = "theme";
export const THEME_ATTRIBUTE = "data-theme";

export type Theme = "light" | "dark";

function isTheme(value: string | null | undefined): value is Theme {
	return value === "light" || value === "dark";
}

/** Read the OS-level dark mode preference. */
export function getSystemTheme(): Theme {
	if (typeof window === "undefined" || !window.matchMedia) return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

/** Read the user's saved theme preference from localStorage. */
export function getStoredTheme(): Theme | null {
	if (typeof window === "undefined") return null;
	try {
		const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
		return isTheme(stored) ? stored : null;
	} catch {
		return null;
	}
}

/** Read the theme currently applied to <html>. */
export function getCurrentTheme(): Theme {
	if (typeof document === "undefined") return "light";
	const current = document.documentElement.getAttribute(THEME_ATTRIBUTE);
	return isTheme(current) ? current : "light";
}

/** Compute the theme to apply on initial page load. */
export function getInitialTheme(): Theme {
	return getStoredTheme() ?? getSystemTheme();
}

/** Persist a theme choice to localStorage. */
export function persistTheme(theme: Theme): void {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	} catch {
		/* storage may be unavailable (private mode, etc.) */
	}
}

/** Apply a theme to <html> by setting the configured attribute. */
export function applyTheme(theme: Theme): void {
	if (typeof document === "undefined") return;
	document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
}

/** Apply a theme and persist it as the user's choice. */
export function setTheme(theme: Theme): void {
	applyTheme(theme);
	persistTheme(theme);
}

/** Flip between light and dark, applying and persisting the new value. */
export function toggleTheme(): Theme {
	const next: Theme = getCurrentTheme() === "dark" ? "light" : "dark";
	setTheme(next);
	return next;
}

/**
 * Run before first paint to apply the correct theme and avoid FOUC.
 * Intended to be called from a synchronous inline <script>.
 */
export function initTheme(): void {
	applyTheme(getInitialTheme());
}
