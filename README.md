# Portfolio Website

A modern, responsive multi-page portfolio website showcasing projects, academic background, certifications, and contact information. Built with HTML, CSS, JavaScript, and Bootstrap with smooth navigation and interactive components.

## 📁 Project Structure

```
portfolio/
│
├── index.html           # Redirect page to home.html
├── home.html           # Home/Landing page
├── about.html          # About Me page
├── academics.html      # Academic background page
├── projects.html       # Projects showcase page
├── certificates.html   # Certifications page
├── contact.html        # Contact form page
├── README.md           # Project documentation
│
├── css/
│   └── style.css       # Unified CSS for all pages
│
├── js/
│   └── script.js       # JavaScript functionality
│
└── images/             # Images directory
    └── README.md
```

## 🎨 Pages Included

1. **Home** - Hero section with introduction and social links
2. **About Me** - Personal information and skills with animated progress bars
3. **Academics** - Educational background and qualifications timeline
4. **Projects** - Showcase of 6 projects with descriptions and tech stack
5. **Certificates** - Professional certifications and achievements
6. **Contact** - Contact form, location, email, phone, and social media links

## 🚀 Features

- **Multi-Page Architecture** - Separate pages for better organization and navigation
- **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- **Unified Navigation** - Consistent navbar across all pages with easy page switching
- **Single CSS File** - One stylesheet controlling the entire website for easy maintenance
- **Smooth Scrolling** - Elegant navigation within pages
- **Animated Elements** - Fade-in animations on scroll for engaging user experience
- **Progress Bars** - Animated skill progress indicators with percentage display
- **Back to Top Button** - Quick navigation to top of page
- **Contact Form** - Functional contact form with client-side validation
- **Modern UI** - Clean and professional design with gradient backgrounds
- **Bootstrap 5.3** - Responsive grid system and components
- **Custom Styling** - Unique color scheme and smooth animations
- **Fast Loading** - Optimized structure with minimal dependencies

## 📝 How to Customize
Update your name and title across all pages:

- **home.html**: Change name, title, introduction, and profile image
- **Navigation**: Update "John Doe" in the navbar (appears on all pages)
- **Footer**: Update copyright information on all pages

### 2. About Page (about.html)

- Update personal description paragraphs
- Modify skill names and percentages in the skills section
- Add or remove skills as needed
- Adjust progress bar widths to match your skill levels

### 3. Academics Page (academics.html)

- Replace education details (institution names, dates, GPAs)
- Update descriptions of your educational achievements
- Modify badges and specializations
- Add or remove timeline entries as needed

### 4. Projects Page (projects.html)

- Replace project images (update placeholder URLs or use local images)
- Update project titles, descriptions, and feature lists
- Modify technology badges (React, Node.js, etc.) for each project
- Update project links in the "View" buttons
- Add or remove project cards as needed

### 5. Certificates Page (certificates.html)

- Update certificate names and issuing organizations
- Change issue dates and descriptions
- Update credential links to your actual certificates
- Add or remove certificate cards as needed

### 6. Contact Page (contact.html)

- Update location information
- Change email address (in both display and mailto link)
- Update phone number (in both display and tel link)
- Modify social media links (GitHub, LinkedIn, Twitter, Instagram)
- Configure form submission (currently shows alert, see note below)


## 💡 Tips

- Use high-quality images for better appearance (recommended: 500x500px for profile)
- Keep descriptions concise, professional, and engaging
- Update the copyright year in the footer across all pages
- Test navigation on multiple devices and browsers
- Optimize images for faster loading (compress before uploading)
- Add your actual project links and certificate credentials
- Consider setting up a backend for the contact form (EmailJS, Formspree, etc.)
- Maintain consistent naming convention in the navigation across all page
- Test on multiple devices and browsers
- Optimize images for faster loading
- Add your actual project links and certificate credentials

## 🔧 Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
- **Bootstrap 5.3** - Responsive framework
- **JavaScript** - Interactive functionality
- **Bootstrap Icons** - Icon library

### Contact Form
The contact form currently displays an alert message and logs data to the console. To make it functional:
- Integrate with EmailJS (recommended for beginners)
- Use a backend service (Node.js + Nodemailer)
- Implement a third-party form service (Formspree, Netlify Forms)

### Navigation
The JavaScript handles both multi-page navigation (.html links) and smooth scrolling for anchor links on the same page.

## 👨‍💻 Author

**Himanshu Raturi**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/himanshu-raturi/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/Himanshu0508Raturi)
