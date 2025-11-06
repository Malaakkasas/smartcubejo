# Smart Cube - Professional Company Website

A modern, responsive, and interactive website for Smart Cube - AI-Driven Innovation Leaders. Built with custom HTML, CSS, JavaScript, and PHP for dynamic functionality.

## 🚀 Features

- **Modern Design**: Clean, professional UI inspired by contemporary web design trends
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Smooth scroll animations, hover effects, and dynamic content
- **AI-Themed Visuals**: Floating particles, gradient animations, and tech-inspired elements
- **Dynamic Contact Form**: PHP-powered contact form with email notifications
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags, semantic HTML, and structured data

## 📁 Project Structure

```
smart-cube-website/
├── index.php                 # Main landing page
├── contact-handler.php       # Contact form processing
├── config.php               # Site configuration
├── assets/
│   ├── css/
│   │   ├── main.css         # Main stylesheet
│   │   └── animations.css   # Animation styles
│   ├── js/
│   │   ├── main.js          # Main JavaScript functionality
│   │   └── animations.js    # Advanced animations
│   └── images/
│       └── logo.svg         # Company logo
└── README.md               # This file
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: PHP 7.4+
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Animations**: CSS animations with JavaScript enhancements
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)

## 📋 Prerequisites

- Web server with PHP support (Apache/Nginx)
- PHP 7.4 or higher
- Mail server configuration for contact form

## 🚀 Deployment on Bluehost

### Step 1: Prepare Your Files

1. Download all project files to your local computer
2. Ensure all file paths are correct and assets are properly linked

### Step 2: Upload to Bluehost

#### Option A: Using File Manager (Recommended)
1. Log in to your Bluehost cPanel
2. Open **File Manager**
3. Navigate to `public_html` directory
4. Upload all project files to the root directory
5. Extract if uploaded as a zip file

#### Option B: Using FTP
1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Bluehost server:
   - Host: Your domain name or server IP
   - Username: Your cPanel username
   - Password: Your cPanel password
   - Port: 21 (or 22 for SFTP)
3. Upload all files to the `public_html` directory

### Step 3: Configure the Website

1. **Update Configuration**:
   - Edit `config.php` with your actual domain and email settings
   - Update contact email addresses in `contact-handler.php`

2. **Set File Permissions**:
   - Set directories to 755
   - Set PHP files to 644
   - Ensure `contact_log.txt` is writable (666)

3. **Test Email Functionality**:
   - Update SMTP settings in `config.php` if using custom email
   - Test the contact form to ensure emails are being sent

### Step 4: Domain Configuration

1. **Set Index File**:
   - Ensure `index.php` is set as the default document
   - This is usually automatic on Bluehost

2. **SSL Certificate**:
   - Enable SSL through Bluehost cPanel
   - Update all URLs to use HTTPS

### Step 5: Performance Optimization

1. **Enable Compression**:
   - Add gzip compression in `.htaccess` if not already enabled

2. **Caching**:
   - Configure browser caching for static assets

3. **CDN** (Optional):
   - Consider using Cloudflare for additional performance

## ⚙️ Configuration

### Email Settings

Update the following in `config.php`:

```php
define('SITE_EMAIL', 'your-email@yourdomain.com');
define('SMTP_HOST', 'mail.yourdomain.com');
define('SMTP_USERNAME', 'your-email@yourdomain.com');
define('SMTP_PASSWORD', 'your-email-password');
```

### Contact Form

The contact form in `contact-handler.php` will:
- Validate form inputs
- Send email notifications
- Send auto-reply to users
- Log submissions (optional)

### Customization

1. **Colors**: Update CSS variables in `assets/css/main.css`
2. **Content**: Modify text content in `index.php`
3. **Images**: Replace placeholder images in `assets/images/`
4. **Company Info**: Update company details in `config.php`

## 🎨 Design Customization

### Color Scheme
The website uses a modern tech color palette:
- Primary: `#2563eb` (Blue)
- Secondary: `#06b6d4` (Cyan)
- Accent: `#8b5cf6` (Purple)
- Dark: `#0f172a` (Navy)

### Typography
- Font Family: Inter (Google Fonts)
- Headings: 600-800 weight
- Body: 400-500 weight

### Animations
- Scroll-triggered animations
- Hover effects on interactive elements
- Floating particle background
- Smooth transitions throughout

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## 🔧 Troubleshooting

### Common Issues

1. **Contact Form Not Working**:
   - Check PHP mail configuration
   - Verify SMTP settings
   - Ensure proper file permissions

2. **Images Not Loading**:
   - Check file paths in HTML/CSS
   - Verify image files are uploaded
   - Check file permissions

3. **Animations Not Working**:
   - Ensure JavaScript files are loaded
   - Check browser console for errors
   - Verify CSS animation support

### Performance Issues

1. **Slow Loading**:
   - Optimize images (compress, resize)
   - Enable gzip compression
   - Minimize CSS/JS files

2. **Mobile Issues**:
   - Test on actual devices
   - Check viewport meta tag
   - Verify touch interactions

## 📞 Support

For technical support or customization requests:
- Email: info@smartcube.com
- Website: https://smartcube.com

## 📄 License

This project is proprietary to Smart Cube. All rights reserved.

## 🔄 Updates

To update the website:
1. Make changes to local files
2. Test thoroughly on local/staging environment
3. Upload updated files to production
4. Clear any caches
5. Test live website functionality

---

**Smart Cube** - Transforming complexity into intelligent efficiency through AI-driven innovation.