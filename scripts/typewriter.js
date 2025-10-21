/**
 * Typewriter Animation
 *
 * Creates a typewriter effect for the hero greeting text
 * with a blinking cursor that disappears when complete.
 */

document.addEventListener('DOMContentLoaded', function() {
    const element = document.querySelector('.typewriter-text');
    const text = "Hi, I'm Yashar";
    let index = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150); // 150ms per character
        } else {
            // Mark as done (stops cursor blinking)
            element.classList.add('done');

            // Remove cursor completely after 1 second
            setTimeout(() => {
                element.style.borderRight = 'none';
            }, 1000);
        }
    }

    // Wait for the Caveat font to load before starting animation
    async function startTypewriter() {
        try {
            // Explicitly load and wait for Caveat font
            await document.fonts.load('700 1em Caveat');
            // Extra small delay to ensure font is fully rendered
            await new Promise(resolve => setTimeout(resolve, 100));
            // Start typing after 500ms
            setTimeout(type, 500);
        } catch (error) {
            // Fallback if font loading fails
            console.warn('Font loading failed, starting typewriter anyway');
            setTimeout(type, 800);
        }
    }

    // Check if Font Loading API is available
    if (document.fonts && document.fonts.load) {
        startTypewriter();
    } else {
        // Fallback: wait longer for font to load
        setTimeout(type, 1000);
    }
});
