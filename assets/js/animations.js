// Smart Cube - Advanced Animations

// Animation Controller Class
class AnimationController {
    constructor() {
        this.animations = new Map();
        this.observers = new Map();
        this.init();
    }

    init() {
        this.setupIntersectionObservers();
        this.setupScrollAnimations();
        this.setupHoverAnimations();
        this.setupLoadAnimations();
    }

    // Intersection Observer for scroll-triggered animations
    setupIntersectionObservers() {
        const observerOptions = {
            threshold: [0.1, 0.3, 0.5, 0.7],
            rootMargin: '0px 0px -50px 0px'
        };

        // Main content observer
        const contentObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerAnimation(entry.target, entry.intersectionRatio);
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll([
            '.scroll-reveal',
            '.scroll-reveal-left',
            '.scroll-reveal-right',
            '.animate-on-scroll',
            '.stagger-animation'
        ].join(','));

        animatedElements.forEach(element => {
            contentObserver.observe(element);
        });

        this.observers.set('content', contentObserver);
    }

    // Trigger animations based on scroll position
    triggerAnimation(element, ratio) {
        const animationType = this.getAnimationType(element);
        
        switch (animationType) {
            case 'fadeInUp':
                this.fadeInUp(element);
                break;
            case 'fadeInLeft':
                this.fadeInLeft(element);
                break;
            case 'fadeInRight':
                this.fadeInRight(element);
                break;
            case 'stagger':
                this.staggerAnimation(element);
                break;
            case 'counter':
                this.animateCounter(element);
                break;
            case 'progressBar':
                this.animateProgressBar(element, ratio);
                break;
            default:
                this.defaultReveal(element);
        }
    }

    getAnimationType(element) {
        if (element.classList.contains('scroll-reveal-left')) return 'fadeInLeft';
        if (element.classList.contains('scroll-reveal-right')) return 'fadeInRight';
        if (element.classList.contains('stagger-animation')) return 'stagger';
        if (element.classList.contains('counter')) return 'counter';
        if (element.classList.contains('progress-bar')) return 'progressBar';
        return 'fadeInUp';
    }

    // Animation methods
    fadeInUp(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    fadeInLeft(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }

    fadeInRight(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(50px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }

    staggerAnimation(element) {
        const children = element.children;
        Array.from(children).forEach((child, index) => {
            child.style.opacity = '0';
            child.style.transform = 'translateY(30px)';
            child.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            setTimeout(() => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    defaultReveal(element) {
        element.classList.add('revealed');
    }

    // Counter animation
    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target')) || 0;
        const duration = parseInt(element.getAttribute('data-duration')) || 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }

    // Progress bar animation
    animateProgressBar(element, ratio) {
        const progress = element.querySelector('.progress-fill');
        if (progress) {
            const targetWidth = element.getAttribute('data-progress') || '100';
            const currentWidth = Math.min(ratio * 100, parseInt(targetWidth));
            progress.style.width = currentWidth + '%';
        }
    }

    // Setup scroll-based animations
    setupScrollAnimations() {
        let ticking = false;

        const updateScrollAnimations = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            // Parallax effects
            this.updateParallax(scrollTop);
            
            // Background animations
            this.updateBackgroundAnimations(scrollTop);
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollAnimations);
                ticking = true;
            }
        });
    }

    // Parallax scrolling effects
    updateParallax(scrollTop) {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Background animation updates
    updateBackgroundAnimations(scrollTop) {
        const bgElements = document.querySelectorAll('.animated-bg');
        
        bgElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 1;
            const rotation = scrollTop * speed * 0.1;
            element.style.transform = `rotate(${rotation}deg)`;
        });
    }

    // Setup hover animations
    setupHoverAnimations() {
        // Magnetic effect for buttons
        const magneticElements = document.querySelectorAll('.magnetic');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0, 0)';
            });
        });

        // Tilt effect for cards
        const tiltElements = document.querySelectorAll('.tilt-effect');
        
        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * -10;
                const rotateY = (x - centerX) / centerX * 10;
                
                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // Setup load animations
    setupLoadAnimations() {
        window.addEventListener('load', () => {
            // Animate hero elements
            this.animateHeroElements();
            
            // Animate navigation
            this.animateNavigation();
            
            // Start background animations
            this.startBackgroundAnimations();
        });
    }

    animateHeroElements() {
        const heroTitle = document.querySelector('.hero-title');
        const heroDescription = document.querySelector('.hero-description');
        const heroButtons = document.querySelector('.hero-buttons');
        const heroVisual = document.querySelector('.hero-visual');

        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                heroTitle.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 300);
        }

        if (heroDescription) {
            heroDescription.style.opacity = '0';
            heroDescription.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                heroDescription.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                heroDescription.style.opacity = '1';
                heroDescription.style.transform = 'translateY(0)';
            }, 600);
        }

        if (heroButtons) {
            heroButtons.style.opacity = '0';
            heroButtons.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                heroButtons.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                heroButtons.style.opacity = '1';
                heroButtons.style.transform = 'translateY(0)';
            }, 900);
        }

        if (heroVisual) {
            heroVisual.style.opacity = '0';
            heroVisual.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                heroVisual.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                heroVisual.style.opacity = '1';
                heroVisual.style.transform = 'scale(1)';
            }, 400);
        }
    }

    animateNavigation() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.transform = 'translateY(-100%)';
            
            setTimeout(() => {
                navbar.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                navbar.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    startBackgroundAnimations() {
        // Floating particles
        this.createFloatingParticles();
        
        // Animated gradients
        this.animateGradients();
    }

    createFloatingParticles() {
        const particleContainer = document.querySelector('.particles-bg');
        if (!particleContainer) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            // Random properties
            const size = Math.random() * 6 + 2;
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, rgba(37, 99, 235, 0.1) 100%);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                animation: floatUp ${duration}s linear infinite;
                animation-delay: ${delay}s;
                pointer-events: none;
            `;
            
            particleContainer.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particleContainer.contains(particle)) {
                    particleContainer.removeChild(particle);
                }
            }, (duration + delay) * 1000);
        };

        // Create particles periodically
        setInterval(createParticle, 3000);
        
        // Create initial batch
        for (let i = 0; i < 8; i++) {
            setTimeout(createParticle, i * 500);
        }
    }

    animateGradients() {
        const gradientElements = document.querySelectorAll('.animated-gradient');
        
        gradientElements.forEach(element => {
            element.style.backgroundSize = '400% 400%';
            element.style.animation = 'gradientShift 15s ease infinite';
        });
    }

    // Utility methods
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    lerp(start, end, factor) {
        return start + (end - start) * factor;
    }

    // Cleanup method
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.animations.clear();
        this.observers.clear();
    }
}

// Text Animation Effects
class TextAnimations {
    static typeWriter(element, text, speed = 50) {
        element.innerHTML = '';
        let i = 0;
        
        const type = () => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };
        
        type();
    }

    static scrambleText(element, finalText, duration = 2000) {
        const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const length = finalText.length;
        let frame = 0;
        const totalFrames = duration / 16; // 60fps
        
        const animate = () => {
            let scrambled = '';
            
            for (let i = 0; i < length; i++) {
                if (frame > totalFrames * (i / length)) {
                    scrambled += finalText[i];
                } else {
                    scrambled += chars[Math.floor(Math.random() * chars.length)];
                }
            }
            
            element.textContent = scrambled;
            
            if (frame < totalFrames) {
                frame++;
                requestAnimationFrame(animate);
            } else {
                element.textContent = finalText;
            }
        };
        
        animate();
    }

    static wavyText(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.animation = `wave 2s ease-in-out infinite`;
            span.style.animationDelay = `${i * 0.1}s`;
            element.appendChild(span);
        });
    }
}

// Mouse Trail Effect
class MouseTrail {
    constructor() {
        this.trail = [];
        this.maxTrail = 20;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.addTrailPoint(e.clientX, e.clientY);
        });
        
        this.animate();
    }

    addTrailPoint(x, y) {
        this.trail.push({ x, y, life: 1 });
        
        if (this.trail.length > this.maxTrail) {
            this.trail.shift();
        }
    }

    animate() {
        // Clear previous trail elements
        document.querySelectorAll('.mouse-trail').forEach(el => el.remove());
        
        this.trail.forEach((point, index) => {
            const trailElement = document.createElement('div');
            trailElement.className = 'mouse-trail';
            trailElement.style.cssText = `
                position: fixed;
                left: ${point.x}px;
                top: ${point.y}px;
                width: ${point.life * 10}px;
                height: ${point.life * 10}px;
                background: radial-gradient(circle, rgba(37, 99, 235, ${point.life * 0.5}) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
            `;
            
            document.body.appendChild(trailElement);
            
            // Fade out
            point.life -= 0.05;
            
            if (point.life <= 0) {
                this.trail.splice(index, 1);
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main animation controller
    window.animationController = new AnimationController();
    
    // Initialize mouse trail (optional - can be enabled/disabled)
    // window.mouseTrail = new MouseTrail();
    
    // Add CSS for additional animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(50px);
                opacity: 0;
            }
        }
        
        @keyframes wave {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
        
        .floating-particle {
            will-change: transform, opacity;
        }
        
        .tilt-effect {
            transition: transform 0.3s ease;
            transform-style: preserve-3d;
        }
        
        .magnetic {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AnimationController, TextAnimations, MouseTrail };
}