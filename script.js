document.addEventListener('DOMContentLoaded', () => {
    const panda = document.getElementById('panda');

    // Al hacer clic, el panda crece momentáneamente
    panda.addEventListener('click', () => {
        // Pausamos la animación flotante para aplicar el salto
        panda.style.animation = 'none';
        panda.style.transform = 'scale(1.2) translateY(-30px)';
        
        // Restauramos la animación después de 300ms
        setTimeout(() => {
            panda.style.transform = '';
            panda.style.animation = 'flotar 3s ease-in-out infinite';
        }, 300);
    });
});