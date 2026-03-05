/**
 * Terminal Typewriter Animation
 *
 * Types "hello()" as input, shows enter symbol, then prints
 * output lines one at a time with a typing effect.
 */

document.addEventListener('DOMContentLoaded', function() {
    var inputEl = document.querySelector('.terminal-input');
    var cursorEl = document.querySelector('.terminal-cursor');
    var outputLines = document.querySelectorAll('.terminal-output-line');
    if (!inputEl || !cursorEl) return;

    var input = 'hello()';
    var lines = [
        "Hi, I'm Yashar",
        'I help organizations make better use of their data'
    ];

    // Types text character by character, inserting text nodes before the cursor
    function typeInto(container, text, speed) {
        var textNode = document.createTextNode('');
        container.insertBefore(textNode, cursorEl);

        return new Promise(function(resolve) {
            var i = 0;
            function step() {
                if (i < text.length) {
                    textNode.textContent += text.charAt(i);
                    i++;
                    setTimeout(step, speed + Math.random() * speed * 0.6);
                } else {
                    resolve();
                }
            }
            step();
        });
    }

    function pause(ms) {
        return new Promise(function(resolve) { setTimeout(resolve, ms); });
    }

    async function run() {
        // Phase 1: Type "hello()" — cursor starts inside .terminal-input
        await typeInto(inputEl, input, 100);

        await pause(400);

        // Phase 2: Type each output line
        for (var idx = 0; idx < lines.length; idx++) {
            var lineEl = outputLines[idx];
            if (!lineEl) continue;

            lineEl.classList.add('visible');
            lineEl.appendChild(cursorEl); // moves cursor from previous parent
            await typeInto(lineEl, lines[idx], 60);
            await pause(300);
        }

        // Cursor keeps blinking at the end
    }

    async function start() {
        try {
            await document.fonts.load('400 1em "JetBrains Mono"');
        } catch (e) {}
        await pause(600);
        run();
    }

    if (document.fonts && document.fonts.load) {
        start();
    } else {
        setTimeout(run, 1000);
    }
});
