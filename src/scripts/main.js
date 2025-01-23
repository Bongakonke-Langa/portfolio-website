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
