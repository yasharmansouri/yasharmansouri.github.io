/**
 * Theme Toggle Script
 *
 * Handles dark/light theme switching with localStorage persistence
 * and system preference detection. Prevents FOUC on page load.
 */

// ============================================================
// IMMEDIATE EXECUTION - Prevent FOUC
// ============================================================

(function() {
    // Get theme from localStorage or system preference
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }

        // Default to dark mode
        return 'dark';
    };

    // Set theme immediately (before DOM loads)
    const theme = getPreferredTheme();
    document.documentElement.setAttribute('data-theme', theme);
})();

// ============================================================
// THEME TOGGLE FUNCTIONALITY
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');

    if (!themeToggle || !themeIcon) {
        console.warn('Theme toggle button not found');
        return;
    }

    // Get current theme
    const getCurrentTheme = () => {
        return document.documentElement.getAttribute('data-theme') || 'dark';
    };

    // Update icon based on current theme
    const updateIcon = (theme) => {
        if (theme === 'dark') {
            // Show white moon icon in dark mode
            themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>`;
            themeToggle.setAttribute('aria-pressed', 'true');
            themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            // Show black sun icon in light mode
            themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>`;
            themeToggle.setAttribute('aria-pressed', 'false');
            themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    };

    // Set initial icon
    updateIcon(getCurrentTheme());

    // Toggle theme
    themeToggle.addEventListener('click', function() {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Update DOM
        document.documentElement.setAttribute('data-theme', newTheme);

        // Save to localStorage
        localStorage.setItem('theme', newTheme);

        // Update icon
        updateIcon(newTheme);
    });

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only update if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
                updateIcon(newTheme);
            }
        });
    }
});
