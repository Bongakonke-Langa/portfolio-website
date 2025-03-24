// Form handling
class Portfolio {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.contactForm = document.getElementById('contactForm');
        
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', this.handleContactSubmit.bind(this));
        }

        // Add smooth scrolling to all internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });
    }

    handleContactSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(this.contactForm);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Here you would typically send the data to a server
        console.log('Form submitted:', contactData);
        alert('Thank you for your message! I will get back to you soon.');
        this.contactForm.reset();
    }

    handleSmoothScroll(event) {
        event.preventDefault();
        const target = event.currentTarget;
        const elementId = target.getAttribute('href');
        
        if (elementId) {
            const element = document.querySelector(elementId);
            element?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}

// Initialize the portfolio when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});


// Get all sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

// Add scroll event listener
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if we've scrolled past the section
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // Update active class in navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
