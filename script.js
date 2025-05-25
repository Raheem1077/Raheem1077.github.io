// Projects data
const projects = [
    {
        title: "Aura – eCommerce Website (MERN Stack)",
        description: "A full-stack eCommerce web application built using the MERN stack. It allows users to browse products, manage a cart, and simulate an online shopping experience.",
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
        features: [
            "Product browsing and detailed views",
            "Cart management",
            "Backend API with CRUD operations",
            "MongoDB Atlas integration"
        ],
        github: "https://github.com/abdulraheem5335/Aura",
        status: "Completed"
    },
    {
        title: "Aura – Static Web Version (HTML/CSS/JS)",
        description: "A static website version of Aura, built using HTML, CSS, and JavaScript. It showcases the design and UI/UX concepts for the Aura eCommerce platform.",
        techStack: ["HTML", "CSS", "JavaScript"],
        features: [
            "Responsive layout with clean design",
            "Multiple product and navigation pages",
            "Interactive elements using vanilla JavaScript"
        ],
        github: "https://github.com/abdulraheem5335/Web-Assignement",
        status: "Completed"
    },
    {
        title: "Password Manager (MERN + Tailwind CSS)",
        description: "A secure and user-friendly Password Manager application built using the MERN stack, styled with Tailwind CSS.",
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
        features: [
            "Add, update, delete, and view stored passwords",
            "Secure data management on the backend",
            "Responsive and modern UI with Tailwind",
            "Encryption and authentication (coming soon)"
        ],
        github: "https://github.com/abdulraheem5335/Password-Manager",
        status: "In Progress"
    }
];

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const projectsGrid = document.getElementById('projects-grid');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        // Ensure header stays dark
        document.querySelector('.header').style.background = '#111827';
    });
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Generate project cards
function generateProjectCards() {
    const projectsHTML = projects.map(project => {
        const statusClass = project.status === 'Completed' ? 'status-completed' : 'status-progress';
        
        const techStackHTML = project.techStack.map(tech => 
            `<span class="tech-item">${tech}</span>`
        ).join('');
        
        const featuresHTML = project.features.map(feature => 
            `<li>• ${feature}</li>`
        ).join('');
        
        return `
            <div class="project-card">
                <span class="project-status ${statusClass}">${project.status}</span>
                
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                
                <div class="project-tech">
                    <h4>Tech Stack:</h4>
                    <div class="tech-stack">
                        ${techStackHTML}
                    </div>
                </div>
                
                <div class="project-features">
                    <h4>Key Features:</h4>
                    <ul class="features-list">
                        ${featuresHTML}
                    </ul>
                </div>
                
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <svg class="github-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                    </svg>
                    View on GitHub
                </a>
            </div>
        `;
    }).join('');
    
    projectsGrid.innerHTML = projectsHTML;
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = '#111827';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = '#111827';
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.5)';
    }
});

// Animation on scroll (simple version)
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .about-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial styles for animation
    const animatedElements = document.querySelectorAll('.project-card, .about-content');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Generate projects
    generateProjectCards();
    
    // Initial animation check
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        // Ensure header stays dark
        document.querySelector('.header').style.background = '#111827';
    }
});
