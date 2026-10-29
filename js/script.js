// 1. Funcionalidad del Modo Oscuro/Claro
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    // Alternar la clase 'dark-mode' en el body
    body.classList.toggle('dark-mode');
    
    // Cambiar el icono del botón
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// 2. Manejo del formulario de contacto (Evitar recarga de página)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Previene que la página se recargue
    
    // Obtener los valores (opcional, para simular que se envían)
    const name = contactForm.querySelector('input[type="text"]').value;
    
    // Mostrar mensaje de éxito
    alert(`¡Gracias por tu mensaje, ${name}! Me pondré en contacto contigo pronto.`);
    
    // Limpiar el formulario
    contactForm.reset();
});

// 3. Desplazamiento suave (Smooth Scroll) para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});