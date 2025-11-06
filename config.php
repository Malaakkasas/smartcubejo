<?php
// Smart Cube - Configuration File

// Site Configuration
define('SITE_NAME', 'Smart Cube');
define('SITE_TAGLINE', 'AI-Driven Innovation Leaders');
define('SITE_URL', 'https://smartcube.com'); // Update with your actual domain
define('SITE_EMAIL', 'info@smartcube.com');
define('SITE_PHONE', '+962 6 XXX XXXX');

// Company Information
define('COMPANY_NAME', 'Smart Cube');
define('COMPANY_ADDRESS', 'Amman, Jordan');
define('COMPANY_FOUNDED', '2020');

// Social Media Links
define('SOCIAL_LINKEDIN', 'https://linkedin.com/company/smartcube');
define('SOCIAL_TWITTER', 'https://twitter.com/smartcube');
define('SOCIAL_FACEBOOK', 'https://facebook.com/smartcube');
define('SOCIAL_INSTAGRAM', 'https://instagram.com/smartcube');

// Database Configuration (if needed for future features)
define('DB_HOST', 'localhost');
define('DB_NAME', 'smartcube_db');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_password');

// Email Configuration
define('SMTP_HOST', 'smtp.gmail.com'); // Update with your SMTP server
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'your_email@gmail.com');
define('SMTP_PASSWORD', 'your_app_password');
define('SMTP_ENCRYPTION', 'tls');

// API Keys (for future integrations)
define('GOOGLE_ANALYTICS_ID', 'GA_MEASUREMENT_ID');
define('GOOGLE_MAPS_API_KEY', 'YOUR_GOOGLE_MAPS_API_KEY');
define('RECAPTCHA_SITE_KEY', 'YOUR_RECAPTCHA_SITE_KEY');
define('RECAPTCHA_SECRET_KEY', 'YOUR_RECAPTCHA_SECRET_KEY');

// Feature Flags
define('ENABLE_CONTACT_FORM', true);
define('ENABLE_NEWSLETTER', true);
define('ENABLE_BLOG', false);
define('ENABLE_ANALYTICS', true);
define('ENABLE_CHAT_WIDGET', false);

// Performance Settings
define('ENABLE_CACHING', true);
define('CACHE_DURATION', 3600); // 1 hour
define('ENABLE_COMPRESSION', true);
define('ENABLE_CDN', false);

// Security Settings
define('ENABLE_CSRF_PROTECTION', true);
define('ENABLE_RATE_LIMITING', true);
define('MAX_REQUESTS_PER_MINUTE', 60);

// Content Settings
define('DEFAULT_LANGUAGE', 'en');
define('SUPPORTED_LANGUAGES', ['en', 'ar']);
define('TIMEZONE', 'Asia/Amman');

// File Upload Settings
define('MAX_FILE_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_FILE_TYPES', ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx']);

// Company Services
$services = [
    'ai_solutions' => [
        'title' => 'Artificial Intelligence Solutions',
        'description' => 'Machine Learning, NLP, Computer Vision, and Conversational AI',
        'features' => [
            'Machine Learning & Predictive Modeling',
            'Natural Language Processing',
            'Computer Vision & Image Recognition',
            'Chatbots & Conversational AI',
            'AI Process Automation',
            'Generative AI for Content and Media'
        ]
    ],
    'business_automation' => [
        'title' => 'Business Automation',
        'description' => 'Digital transformation through intelligent automation',
        'features' => [
            'Digital Transformation',
            'Software Development',
            'AI-integrated Mobile & Web Applications',
            'Intelligent Recommendation Systems',
            'Voice and Image Recognition Apps',
            'Smart Productivity Tools'
        ]
    ],
    'digital_marketing' => [
        'title' => 'Digital Marketing',
        'description' => 'AI-powered marketing solutions for enhanced engagement',
        'features' => [
            'AI-powered Content Creation',
            'Predictive Audience Targeting',
            'Sentiment Analysis & Social Listening',
            'Campaign Performance Optimization',
            'Influencer & Trend Analytics',
            'Search Engine Optimization (SEO)'
        ]
    ],
    'consulting' => [
        'title' => 'Consulting Services',
        'description' => 'Strategic guidance across all business domains',
        'features' => [
            'Technology Strategy',
            'Digital Transformation Consulting',
            'Process Innovation',
            'AI Implementation Strategy',
            'Business Process Optimization',
            'Change Management'
        ]
    ],
    'digital_payments' => [
        'title' => 'Digital Payments',
        'description' => 'Electronic Revenue Collection systems',
        'features' => [
            'Comprehensive Fee Collection Solutions',
            'Multi-channel Payment Processing',
            'Government Revenue Systems',
            'Automated Payment Workflows',
            'Real-time Transaction Monitoring',
            'Compliance & Security Management'
        ]
    ]
];

// Sister Companies
$companies = [
    'bayanat' => [
        'name' => 'Bayanat',
        'specialization' => 'Government Service Centers',
        'description' => 'Delivering government services on behalf of the government in an innovative way, with an integrated framework and high quality, in cooperation with a number of government institutions and departments.',
        'website' => 'https://bayanat.com',
        'services' => [
            'Government Service Delivery',
            'Digital Government Solutions',
            'Citizen Service Centers',
            'Public Sector Innovation'
        ]
    ],
    'tahseel' => [
        'name' => 'Tahseel',
        'specialization' => 'Digital Financial & Revenue Collection Systems',
        'description' => 'Collect government fees on behalf of the government through comprehensive digital financial systems.',
        'website' => 'https://tahseel.com',
        'services' => [
            'Revenue Collection Systems',
            'Digital Payment Processing',
            'Government Fee Management',
            'Financial Transaction Processing'
        ]
    ],
    'reserva' => [
        'name' => 'Reserva',
        'specialization' => 'Intelligent Resource & Booking Management',
        'description' => 'Advanced booking and resource management solutions powered by intelligent algorithms.',
        'website' => 'https://reserva.com',
        'services' => [
            'Smart Booking Systems',
            'Resource Optimization',
            'Capacity Management',
            'Automated Scheduling'
        ]
    ],
    'laiq' => [
        'name' => 'Laiq',
        'specialization' => 'Medical Service Center',
        'description' => 'VIP treatments and fast-tracked services for medical examinations for visa applications, including services for medical fitness, Emirates ID, and immigration.',
        'website' => 'https://laiq.com',
        'services' => [
            'Medical Examinations',
            'Visa Medical Services',
            'Emirates ID Services',
            'Immigration Medical Support'
        ]
    ],
    'vertex' => [
        'name' => 'Vertex',
        'specialization' => 'Next-generation Social Media',
        'description' => 'Revolutionizing how brands and creators connect with their audiences by combining human creativity with advanced artificial intelligence.',
        'website' => 'https://vertex.com',
        'services' => [
            'Social Media Strategy',
            'AI-powered Content Creation',
            'Influencer Marketing',
            'Brand-Creator Connections'
        ]
    ]
];

// Global Locations
$locations = [
    'headquarters' => [
        'city' => 'Amman',
        'country' => 'Jordan',
        'type' => 'Headquarters',
        'description' => 'Center of Strategy & Innovation',
        'address' => 'Amman, Jordan',
        'phone' => '+962 6 XXX XXXX',
        'email' => 'amman@smartcube.com'
    ],
    'uae' => [
        'city' => 'Dubai',
        'country' => 'UAE',
        'type' => 'Regional Hub',
        'description' => 'Middle East Operations',
        'address' => 'Dubai, UAE',
        'phone' => '+971 4 XXX XXXX',
        'email' => 'dubai@smartcube.com'
    ],
    'qatar' => [
        'city' => 'Doha',
        'country' => 'Qatar',
        'type' => 'Regional Hub',
        'description' => 'Gulf Operations',
        'address' => 'Doha, Qatar',
        'phone' => '+974 XXXX XXXX',
        'email' => 'doha@smartcube.com'
    ],
    'usa' => [
        'city' => 'Boston',
        'country' => 'USA',
        'type' => 'Regional Hub',
        'description' => 'North America Operations',
        'address' => 'Boston, MA, USA',
        'phone' => '+1 617 XXX XXXX',
        'email' => 'boston@smartcube.com'
    ]
];

// Utility Functions
function getConfig($key, $default = null) {
    return defined($key) ? constant($key) : $default;
}

function getServices() {
    global $services;
    return $services;
}

function getCompanies() {
    global $companies;
    return $companies;
}

function getLocations() {
    global $locations;
    return $locations;
}

function formatPhoneNumber($phone) {
    return preg_replace('/[^0-9+]/', '', $phone);
}

function sanitizeInput($input) {
    return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function validateCSRFToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Set timezone
date_default_timezone_set(TIMEZONE);

// Start session if not already started
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
?>