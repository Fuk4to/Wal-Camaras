document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("¡Gracias por contactarnos! Te responderemos pronto.");
        contactForm.reset();
    });

    const buttonsComprar = document.querySelectorAll('.comprar');
    buttonsComprar.forEach(button => {
        button.addEventListener('click', () => {
            alert("Producto o servicio agregado al carrito.");
        });
    });
});
