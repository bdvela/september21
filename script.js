// Obtener elementos
const btnFlor = document.getElementById('mostrarFlor');
const flor = document.getElementById('florAmarilla');
const extraButtons = document.getElementById('extraButtons');

const btnCarta = document.getElementById('mostrarCarta');
const btnImagen = document.getElementById('mostrarImagen');

const modalCarta = document.getElementById('modalCarta');
const modalImagen = document.getElementById('modalImagen');

const closeCarta = document.getElementById('closeCarta');
const closeImagen = document.getElementById('closeImagen');

// Animar la flor y mostrar los botones extras
btnFlor.addEventListener('click', () => {
    console.log('Botón presionado');

    // Mostrar la flor y animar su aparición
    flor.classList.remove('hidden');
    gsap.to(flor, { opacity: 1, scale: 1, duration: 1 });

    // Mostrar los botones adicionales después
    extraButtons.classList.remove('hidden');
    gsap.to(extraButtons, { opacity: 1, delay: 1.2 });

    // Ocultar el botón original
    btnFlor.style.display = 'none';
});

// Mostrar la carta en un modal
btnCarta.addEventListener('click', () => {
    console.log('Botón de carta presionado');
    modalCarta.style.display = 'flex'; // Mostrar el modal de la carta
    gsap.fromTo(modalCarta, { opacity: 0 }, { opacity: 1, duration: 0.5 });
});

// Mostrar la imagen en un modal
btnImagen.addEventListener('click', () => {
    console.log('Botón de imagen presionado');
    gsap.to(modalCarta, { opacity: 0, duration: 0, onComplete: () => (modalCarta.style.display = 'none') });
    gsap.to('body', {
        backgroundImage: "url('./yellow-flower.gif')", // Cambia la imagen de fondo
        backgroundSize: '100% auto', // Asegura que la imagen ocupe todo el ancho de la pantalla
        backgroundRepeat: 'no-repeat', // Evita que se repita la imagen
        backgroundPosition: 'center center', // Centra la imagen horizontalmente
        duration: 0, // Duración de la animación
        ease: 'power2.inOut',
    });
    modalImagen.style.display = 'flex'; // Mostrar el modal de la imagen
    gsap.fromTo(modalImagen, { opacity: 0 }, { opacity: 1, duration: 0.5 });
});

// Cerrar el modal de la carta
closeCarta.addEventListener('click', () => {
    console.log('Cerrando carta');
    gsap.to('body', {
        backgroundImage: 'none', // Cambia la imagen de fondo
        backgroundSize: '100% auto', // Asegura que la imagen ocupe todo el ancho de la pantalla
        backgroundRepeat: 'no-repeat', // Evita que se repita la imagen
        backgroundPosition: 'center center', // Centra la imagen horizontalmente
        duration: 0, // Duración de la animación
        ease: 'power2.inOut',
    });
    gsap.to(modalCarta, { opacity: 0, duration: 0.5, onComplete: () => (modalCarta.style.display = 'none') });
});

// Cerrar el modal de la imagen
closeImagen.addEventListener('click', () => {
    console.log('Cerrando imagen');
    gsap.to('body', {
        backgroundImage: 'none', // Cambia la imagen de fondo
        duration: 0, // Duración de la animación
        ease: 'power2.inOut',
    });
    gsap.to(modalImagen, { opacity: 0, duration: 0.5, onComplete: () => (modalImagen.style.display = 'none') });
});
