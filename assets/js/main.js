// Smart Cube - Main JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Enable CSS reveal animations
    document.documentElement.classList.add('js-enabled');
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initContactForm();
    initSmoothScrolling();
    initParticles();
    initAnimations();
    initAdvancedInteractions();
    initPageTransitions();
    initHeroScrollSequence();
    initGlobalTextReveal();
    initSectionVideos();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect with smooth transitions
    let lastScrollTop = 0;
    let scrollTimeout;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll with smooth animation
        clearTimeout(scrollTimeout);

        if (scrollTop > lastScrollTop && scrollTop > 200) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }

        // Show navbar after scroll stops
        scrollTimeout = setTimeout(() => {
            navbar.style.transform = 'translateY(0)';
        }, 150);

        lastScrollTop = scrollTop;
    });

    // Active link highlighting
    window.addEventListener('scroll', function () {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll reveal animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                if (entry.target.classList.contains('about-grid') ||
                    entry.target.classList.contains('services-grid') ||
                    entry.target.classList.contains('companies-grid')) {
                    if (!entry.target.dataset.staggered) {
                        entry.target.dataset.staggered = 'true';
                        const children = entry.target.querySelectorAll('.about-card, .service-card, .company-card');
                        children.forEach((card, idx) => {
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0) scale(1)';
                            }, idx * 100);
                        });
                    }
                }

                // Item-level fallback (if grid not caught)
                if (entry.target.classList.contains('about-card') ||
                    entry.target.classList.contains('service-card') ||
                    entry.target.classList.contains('company-card')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, 0);
                }
            }
            else {
                // no-op
            }
        });
    }, observerOptions);

    // Add scroll reveal classes and observe elements
    const elementsToReveal = [
        '.section-header',
        '.about-steps',
        '.about-step-section',
        '.services-grid',
        '.service-card',
        '.solutions-grid',
        '.solution-card',
        '.companies-grid',
        '.company-card',
        '.presence-card',
        '.contact-item',
        '.footer-section'
    ];

    elementsToReveal.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            // Auto-apply reveal utility classes for smooth site-wide animations
            element.classList.add('reveal', 'reveal-up');
            observer.observe(element);
        });
    });

    // removed automation wheel observers

    // Staggered delays for stacked step sections to enhance perception
    const stepSections = document.querySelectorAll('.about-step-section');
    stepSections.forEach((el, i) => {
        el.style.transitionDelay = `${i * 100}ms`;
    });

    // Initial check to reveal items already in viewport on load
    function revealInView() {
        const viewportH = window.innerHeight || document.documentElement.clientHeight;
        stepSections.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < viewportH - 80) {
                el.classList.add('revealed');
            }
        });
    }
    window.addEventListener('load', revealInView);
    window.addEventListener('resize', revealInView);
    revealInView();

    // Parallax scrolling effects
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-bg-animation, .about::before');

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Contact form handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Send form data to PHP handler
            fetch('contact-handler.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Reset form
                        this.reset();

                        // Show success message
                        showNotification(data.message || 'Message sent successfully! We\'ll get back to you soon.', 'success');
                    } else {
                        // Show error message
                        const errorMessage = data.errors ? data.errors.join(', ') : data.error || 'Failed to send message. Please try again.';
                        showNotification(errorMessage, 'error');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showNotification('Failed to send message. Please try again later.', 'error');
                })
                .finally(() => {
                    // Reset button
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });

    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Particle animation system
function initParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-bg';
    hero.appendChild(particlesContainer);

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random starting position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';

        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        particlesContainer.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (particlesContainer.contains(particle)) {
                particlesContainer.removeChild(particle);
            }
        }, 25000);
    }

    // Create particles periodically
    setInterval(createParticle, 2000);

    // Create initial particles
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 1000);
    }
}

// Enhanced animations
function initAnimations() {
    // Floating cards animation enhancement
    const floatingCards = document.querySelectorAll('.floating-cards .card');
    floatingCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Service cards hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });

    // Company cards animation
    const companyCards = document.querySelectorAll('.company-card');
    companyCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('.company-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.background = 'linear-gradient(135deg, #8b5cf6, #3b82f6)';
            }
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('.company-icon');
            if (icon) {
                icon.style.transform = '';
                icon.style.background = '';
            }
        });
    });

    // Hero title animation removed to prevent HTML display issues
}

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', function () {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');

        // Send analytics if needed
        if (loadTime > 3000) {
            console.warn('Page load time is slow:', loadTime + 'ms');
        }
    });

    // Monitor scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function () {
                scrollTimeout = null;
                // Scroll performance monitoring
            }, 100);
        }
    });
}

// Initialize performance monitoring
initPerformanceMonitoring();

// Error handling
window.addEventListener('error', function (e) {
    console.error('JavaScript error:', e.error);
    // Send error to analytics service if needed
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        const isLocalhost = ['localhost', '127.0.0.1'].includes(location.hostname);
        if (isLocalhost) {
            // During local development, ensure old SWs are unregistered to avoid stale caches
            if (navigator.serviceWorker.getRegistrations) {
                navigator.serviceWorker.getRegistrations().then(registrations => {
                    registrations.forEach(reg => reg.unregister());
                    console.log('[SW] Unregistered all service workers on localhost');
                });
            }
            return; // Skip registering service worker on localhost
        }

        navigator.serviceWorker.register('/sw.js')
            .then(function () {
                console.log('[SW] Registration successful');
            })
            .catch(function () {
                console.log('[SW] Registration failed');
            });
    });
}

// Advanced mouse interactions
function initAdvancedInteractions() {
    // Magnetic effect for buttons and cards
    const magneticElements = document.querySelectorAll('.btn, .card, .service-card, .company-card');

    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const strength = 0.1;
            element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });

    // Parallax mouse movement for hero cards
    const heroCards = document.querySelectorAll('.floating-cards .card');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        heroCards.forEach((card, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;

            card.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });

    // Smooth cursor follower
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: all 0.3s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, .service-card');

    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.opacity = '0.5';
        });

        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.opacity = '1';
        });
    });
}

// Advanced interactions initialized in main DOMContentLoaded event

// Smooth page transitions
function initPageTransitions() {
    // Add page transition class to body
    document.body.classList.add('page-transition');

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Smooth scroll with easing
    function smoothScrollTo(target, duration = 1000) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;

        const targetPosition = targetElement.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }

    // Override smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScrollTo(target);
        });
    });
}

// Hero scroll sequence (soft, subtle, eased)
function initHeroScrollSequence() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const title = hero.querySelector('.hero-title');
    const orbits = hero.querySelector('.hero-orbits');

    let centerDot = hero.querySelector('.hero-center-dot');
    if (!centerDot) {
        centerDot = document.createElement('div');
        centerDot.className = 'hero-center-dot';
        hero.appendChild(centerDot);
    }

    let ticking = false;

    function clamp(n, min, max) { return Math.min(Math.max(n, min), max); }
    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function update() {
        const rect = hero.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const heroH = Math.max(hero.offsetHeight, viewportH);
        const raw = clamp((viewportH - rect.top) / heroH, 0, 1);
        const t = easeOutCubic(raw);

        if (title) {
            const titleOpacity = clamp(1 - t * 0.9, 0.3, 1);
            const translate = Math.round(t * 22);
            title.style.opacity = String(titleOpacity);
            title.style.transform = `translateY(${translate}px)`;
        }

        if (orbits) {
            const y = Math.round(t * -40);
            const scale = 1 + t * 0.012;
            const orbitOpacity = 1 - t * 0.18;
            orbits.style.transform = `translateY(${y}px) scale(${scale})`;
            orbits.style.opacity = String(clamp(orbitOpacity, 0.55, 1));
        }

        if (centerDot) {
            const dotStart = 0.78;
            const dotProgress = clamp((t - dotStart) / (1 - dotStart), 0, 1);
            const easedDot = easeOutCubic(dotProgress);
            centerDot.style.opacity = String(easedDot);
            centerDot.style.transform = `translate(-50%, calc(-50% + ${easedDot * 12}px))`;
        }

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    requestAnimationFrame(update);
}

// Global text reveal: apply to headings site-wide without manual HTML edits
function initGlobalTextReveal() {
    const selectors = [
        '.hero-title',
        '.section-title',
        '.solution-title',
        '.company-card h3',
        '.service-card h3',
        '.presence-card h3',
        '.contact .section-title'
    ];

    const elements = document.querySelectorAll(selectors.join(','));

    elements.forEach((el) => {
        // Avoid reprocessing and preserve existing markup
        if (el.dataset.processed === 'true') return;
        el.dataset.processed = 'true';
        el.classList.add('text-reveal');

        let spanIndex = 0;

        function wrapNode(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                const frag = document.createDocumentFragment();
                const parts = node.textContent.split(/(\s+)/);
                parts.forEach((part) => {
                    if (part.trim().length === 0) {
                        frag.appendChild(document.createTextNode(part));
                    } else {
                        const span = document.createElement('span');
                        span.textContent = part;
                        span.style.animationDelay = `${Math.min(spanIndex * 60, 900)}ms`;
                        frag.appendChild(span);
                        spanIndex++;
                    }
                });
                return frag;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const clone = node.cloneNode(false);
                node.childNodes.forEach(child => {
                    clone.appendChild(wrapNode(child));
                });
                return clone;
            }
            return node.cloneNode(true);
        }

        const wrapped = wrapNode(el);
        el.innerHTML = '';
        el.appendChild(wrapped);
    });
}

// Section video backgrounds via data-video attribute
function initSectionVideos() {
    const sections = document.querySelectorAll('section[data-video]');
    if (!sections.length) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            if (!video) return;
            if (entry.isIntersecting) {
                if (video.paused) video.play().catch(() => {});
            } else {
                if (!video.paused) video.pause();
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        // Skip if already initialized
        if (section.dataset.videoInit === 'true') return;
        section.dataset.videoInit = 'true';

        const src = section.getAttribute('data-video');
        if (!src) return;

        // Wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'section-video-bg';

        // Video element
        const video = document.createElement('video');
        video.setAttribute('autoplay', '');
        if (section.getAttribute('data-video-muted') !== 'false') video.setAttribute('muted', '');
        if (section.getAttribute('data-video-loop') !== 'false') video.setAttribute('loop', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('preload', 'auto');

        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';
        video.appendChild(source);

        // Overlay
        const overlay = document.createElement('div');
        overlay.className = 'section-video-overlay';

        wrapper.appendChild(video);
        wrapper.appendChild(overlay);

        // Insert as the first child
        section.insertBefore(wrapper, section.firstChild);

        // Observe for play/pause on visibility
        io.observe(section);
    });
}