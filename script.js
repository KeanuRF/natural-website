// Evento para el botón CTA
document.querySelector('.cta-button').addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
});

// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll('.top-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Resaltar la sección activa en la navegación
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.top-nav a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 150)) {
            const currentSection = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show sending state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        
        try {
            // Simular envío
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Clear form
            contactForm.reset();
            
            // Show test message
            alert(`¡Mensaje de prueba!\n\nDatos del formulario:\nNombre: ${formData.name}\nEmail: ${formData.email}\nAsunto: ${formData.subject}\nMensaje: ${formData.message}\n\nEsto es solo una simulación, el mensaje no se enviará realmente.`);
            
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error en la prueba. Por favor intenta de nuevo.');
        } finally {
            // Restore button state
            submitButton.innerHTML = originalText;
        }
    });
});
