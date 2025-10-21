/**
 * Navigation JavaScript
 * Handles mobile menu toggle and dropdown functionality
 */

(function() {
    'use strict';

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle aria-expanded
            this.setAttribute('aria-expanded', !isExpanded);

            // Toggle menu visibility
            navMenu.classList.toggle('active');

            // Toggle body scroll lock on mobile
            if (!isExpanded) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });

        // Close mobile menu on window resize to desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 768 && navMenu.classList.contains('active')) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Dropdown Menu Functionality
    const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

    dropdownItems.forEach(function(dropdown) {
        const dropdownLink = dropdown.querySelector('.nav-link');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        if (!dropdownLink || !dropdownMenu) return;

        // Toggle dropdown on click (mobile)
        dropdownLink.addEventListener('click', function(e) {
            // On mobile, prevent navigation and toggle dropdown
            if (window.innerWidth < 768) {
                e.preventDefault();

                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);

                dropdownMenu.classList.toggle('active');
            }
        });

        // Show dropdown on hover (desktop)
        if (window.matchMedia('(hover: hover)').matches) {
            dropdown.addEventListener('mouseenter', function() {
                dropdownLink.setAttribute('aria-expanded', 'true');
                dropdownMenu.classList.add('active');
            });

            dropdown.addEventListener('mouseleave', function() {
                dropdownLink.setAttribute('aria-expanded', 'false');
                dropdownMenu.classList.remove('active');
            });
        }

        // Keyboard navigation for dropdown
        dropdownLink.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                dropdownMenu.classList.toggle('active');
            }

            // Arrow down to focus first dropdown item
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const firstItem = dropdownMenu.querySelector('a');
                if (firstItem) {
                    dropdownLink.setAttribute('aria-expanded', 'true');
                    dropdownMenu.classList.add('active');
                    firstItem.focus();
                }
            }
        });

        // Handle Escape key to close dropdown
        const dropdownLinks = dropdownMenu.querySelectorAll('a');
        dropdownLinks.forEach(function(link) {
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    dropdownLink.setAttribute('aria-expanded', 'false');
                    dropdownMenu.classList.remove('active');
                    dropdownLink.focus();
                }

                // Arrow up to go back to parent
                if (e.key === 'ArrowUp' && link === dropdownLinks[0]) {
                    e.preventDefault();
                    dropdownLink.focus();
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        dropdownItems.forEach(function(dropdown) {
            const dropdownLink = dropdown.querySelector('.nav-link');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');

            if (!dropdown.contains(event.target)) {
                if (dropdownLink) {
                    dropdownLink.setAttribute('aria-expanded', 'false');
                }
                if (dropdownMenu) {
                    dropdownMenu.classList.remove('active');
                }
            }
        });
    });

    // Sticky Navigation
    let lastScrollTop = 0;
    const nav = document.querySelector('.glass-nav');

    if (nav) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Add shadow when scrolled
            if (scrollTop > 10) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }

            // Optional: Hide nav on scroll down, show on scroll up
            // Uncomment if you want this behavior
            /*
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                nav.classList.add('nav-hidden');
            } else {
                nav.classList.remove('nav-hidden');
            }
            */

            lastScrollTop = scrollTop;
        });
    }

})();
