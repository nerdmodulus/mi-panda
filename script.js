document.addEventListener('DOMContentLoaded', () => {
    const panda = document.getElementById('panda');

    // Al hacer clic, el panda da un salto mientras sigue avanzando
    panda.addEventListener('click', () => {
        // Pausamos los pasos normales
        panda.style.animation = 'none';
        // Aplicamos un salto pronunciado
        panda.style.transform = 'scale(1.2) translateY(-50px)';
        
        // Restauramos la animación de caminar al caer
        setTimeout(() => {
            panda.style.transform = '';
            panda.style.animation = 'pasos 0.4s ease-in-out infinite alternate';
        }, 400);
    });
});