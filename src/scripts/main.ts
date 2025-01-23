// Form handling
interface ContactForm {
    name: string;
    email: string;
    message: string;
}

class Portfolio {
    private contactForm: HTMLFormElement | null;

    constructor() {
        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        this.contactForm = document.getElementById('contactForm') as HTMLFormElement;
        
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', this.handleContactSubmit.bind(this));
        }

        // Add smooth scrolling to all internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });
    }

    private handleContactSubmit(event: Event): void {
        event.preventDefault();
        
        const formData = new FormData(this.contactForm as HTMLFormElement);
        const contactData: ContactForm = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string
        };

        // Here you would typically send the data to a server
        console.log('Form submitted:', contactData);
        alert('Thank you for your message! I will get back to you soon.');
        this.contactForm?.reset();
    }

    private handleSmoothScroll(event: Event): void {
        event.preventDefault();
        const target = event.currentTarget as HTMLAnchorElement;
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
