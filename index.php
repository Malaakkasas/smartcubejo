<?php
// Smart Cube - Professional Company Website
// Main landing page with dynamic content
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Cube - AI-Driven Innovation Leaders</title>
    <meta name="description" content="Smart Cube transforms complexity into intelligent efficiency using AI. We build next-generation solutions for businesses globally.">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <img src="assets/images/no backgr.png" alt="Smart Cube Logo" class="logo-img">
            </div>
            
            <div class="nav-menu" id="nav-menu">
                <a href="#about" class="nav-link">ABOUT</a>
                <a href="#services" class="nav-link">SERVICES</a>
                <a href="#companies" class="nav-link">COMPANIES</a>
                <a href="#contact" class="nav-link">JOURNAL</a>
            </div>
            

            
            <div class="nav-toggle" id="nav-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-background">
            <img src="assets/images/hero-ai-robots.png" alt="AI Technology Background" class="hero-bg-image">
            <div class="hero-overlay"></div>
        </div>
        
        <div class="hero-container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        <span class="line">A Future That</span>
                        <span class="line">Shapes Your</span>
                        <span class="line highlight-text">Intelligence.</span>
                    </h1>
                </div>
                
                <div class="hero-sidebar">
                    <div class="hero-description">
                        <p>We offer AI-driven solutions and intelligent automation to help you navigate technology's challenges with confidence and innovation. Together, we'll build smart systems, digital transformation, and the steps needed for lasting growth — at your own pace.</p>
                    </div>
                    
                    <div class="hero-actions">
                        <a href="#services" class="btn btn-primary">Start Your Journey</a>
                        <a href="#about" class="btn btn-secondary">Get This Innovation</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Transforming Complexity into Intelligence</h2>
                <p class="section-subtitle">
                    Smart Cube is not just an IT company; we are the architects of the next-generation 
                    digital economy, where every process is intuitive and every decision is augmented.
                </p>
            </div>
            
            <div class="about-grid">
                <div class="about-card">
                    <div class="card-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3>Our Mission</h3>
                    <p>To empower businesses and communities by integrating Artificial Intelligence into everyday processes — creating intelligent systems that drive productivity, innovation, and long-term success.</p>
                </div>
                
                <div class="about-card">
                    <div class="card-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3>Our Vision</h3>
                    <p>To be a global leader in AI-driven innovation, building a smarter, more connected world where technology amplifies human potential.</p>
                </div>
                
                <div class="about-card">
                    <div class="card-icon">
                        <i class="fas fa-gem"></i>
                    </div>
                    <h3>Our Value</h3>
                    <p>We go beyond providing technology — we deliver intelligence that creates impact, enhancing your ability to serve, understand, and delight your customers.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Services</h2>
                <p class="section-subtitle">Comprehensive AI-powered solutions for modern businesses</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card" data-service="ai">
                    <div class="service-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3>Artificial Intelligence Solutions</h3>
                    <p>Machine Learning, NLP, Computer Vision, and Conversational AI to transform your business processes.</p>
                    <ul class="service-features">
                        <li>Machine Learning & Predictive Modeling</li>
                        <li>Natural Language Processing</li>
                        <li>Computer Vision & Image Recognition</li>
                        <li>Chatbots & Conversational AI</li>
                    </ul>
                </div>
                
                <div class="service-card" data-service="automation">
                    <div class="service-icon">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <h3>Business Automation</h3>
                    <p>Digital transformation through intelligent automation and AI-integrated applications.</p>
                    <ul class="service-features">
                        <li>Digital Transformation</li>
                        <li>AI-integrated Mobile & Web Apps</li>
                        <li>Smart Productivity Tools</li>
                        <li>Process Automation</li>
                    </ul>
                </div>
                
                <div class="service-card" data-service="marketing">
                    <div class="service-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Digital Marketing</h3>
                    <p>AI-powered marketing solutions for enhanced customer engagement and growth.</p>
                    <ul class="service-features">
                        <li>AI-powered Content Creation</li>
                        <li>Predictive Audience Targeting</li>
                        <li>Sentiment Analysis</li>
                        <li>Campaign Optimization</li>
                    </ul>
                </div>
                
                <div class="service-card" data-service="consulting">
                    <div class="service-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3>Consulting Services</h3>
                    <p>Strategic guidance across HR, marketing, IT, and finance with AI integration expertise.</p>
                    <ul class="service-features">
                        <li>Technology Strategy</li>
                        <li>Digital Transformation</li>
                        <li>Process Innovation</li>
                        <li>AI Implementation</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Companies Section -->
    <section id="companies" class="companies">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Group of Companies</h2>
                <p class="section-subtitle">Specialized expertise across critical domains</p>
            </div>
            
            <div class="companies-grid">
                <?php
                $companies = [
                    [
                        'name' => 'Bayanat',
                        'specialization' => 'Government Service Centers',
                        'description' => 'Delivering government services with innovative frameworks and high quality in cooperation with government institutions.',
                        'icon' => 'fas fa-building'
                    ],
                    [
                        'name' => 'Tahseel',
                        'specialization' => 'Digital Financial Systems',
                        'description' => 'Digital financial and revenue collection systems for government fee collection.',
                        'icon' => 'fas fa-coins'
                    ],
                    [
                        'name' => 'Reserva',
                        'specialization' => 'Resource Management',
                        'description' => 'Intelligent resource and booking management solutions.',
                        'icon' => 'fas fa-calendar-alt'
                    ],
                    [
                        'name' => 'Laiq',
                        'specialization' => 'Medical Services',
                        'description' => 'VIP medical service center with fast-tracked services for visa applications and medical examinations.',
                        'icon' => 'fas fa-user-md'
                    ],
                    [
                        'name' => 'Vertex',
                        'specialization' => 'Social Media Innovation',
                        'description' => 'Next-generation social media company combining human creativity with AI for engaging digital experiences.',
                        'icon' => 'fas fa-share-alt'
                    ]
                ];
                
                foreach ($companies as $company): ?>
                <div class="company-card">
                    <div class="company-icon">
                        <i class="<?php echo $company['icon']; ?>"></i>
                    </div>
                    <h3><?php echo $company['name']; ?></h3>
                    <h4><?php echo $company['specialization']; ?></h4>
                    <p><?php echo $company['description']; ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Global Presence -->
    <section class="global-presence">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Global Footprint</h2>
                <p class="section-subtitle">Strategically positioned for local relevance and global scale</p>
            </div>
            
            <div class="presence-grid">
                <div class="presence-card headquarters">
                    <div class="presence-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <h3>Headquarters</h3>
                    <p>Amman, Jordan</p>
                    <span class="presence-label">Center of Strategy & Innovation</span>
                </div>
                
                <div class="presence-card">
                    <div class="presence-icon">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3>Regional Hubs</h3>
                    <p>UAE • Qatar • Boston</p>
                    <span class="presence-label">Global Operations</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-subtitle">Ready to transform your business with AI? Let's talk.</p>
            </div>
            
            <div class="contact-grid">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Headquarters</h4>
                            <p>Amman, Jordan</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <p>info@smartcube.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Phone</h4>
                            <p>+962 6 XXX XXXX</p>
                        </div>
                    </div>
                </div>
                
                <form class="contact-form" id="contact-form">
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="text" name="company" placeholder="Company Name">
                    </div>
                    <div class="form-group">
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <img src="assets/images/logo.svg" alt="Smart Cube" class="logo">
                        <span class="logo-text">Smart Cube</span>
                    </div>
                    <p>Transforming complexity into intelligent efficiency through AI-driven innovation.</p>
                </div>
                
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#services">AI Solutions</a></li>
                        <li><a href="#services">Business Automation</a></li>
                        <li><a href="#services">Digital Marketing</a></li>
                        <li><a href="#services">Consulting</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Companies</h4>
                    <ul>
                        <li><a href="#companies">Bayanat</a></li>
                        <li><a href="#companies">Tahseel</a></li>
                        <li><a href="#companies">Reserva</a></li>
                        <li><a href="#companies">Laiq</a></li>
                        <li><a href="#companies">Vertex</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Smart Cube. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/animations.js"></script>
</body>
</html>