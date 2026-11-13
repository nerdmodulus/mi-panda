document.addEventListener('DOMContentLoaded', () => {
    const panda = document.getElementById('panda');
    const hojasContenedor = document.getElementById('hojas');
    const emojisHoja = ['🍃', '🎋', '🌿'];

    // Al hacer clic, el panda da un salto mientras sigue avanzando
    panda.addEventListener('click', () => {
        panda.style.animation = 'none';
        panda.style.transform = 'scale(1.2) translateY(-50px)';

        setTimeout(() => {
            panda.style.transform = '';
            panda.style.animation = 'pasos 0.4s ease-in-out infinite alternate';
        }, 400);
    });

    // Genera hojas cayendo de fondo para dar movimiento al sitio
    function crearHoja() {
        const hoja = document.createElement('span');
        hoja.classList.add('hoja-cayendo');
        hoja.textContent = emojisHoja[Math.floor(Math.random() * emojisHoja.length)];
        hoja.style.left = Math.random() * 100 + 'vw';
        hoja.style.animationDuration = (6 + Math.random() * 6) + 's';
        hoja.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
        hojasContenedor.appendChild(hoja);

        setTimeout(() => hoja.remove(), 13000);
    }

    setInterval(crearHoja, 900);
    // Primeras hojas inmediatas para que el fondo no empiece vacío
    for (let i = 0; i < 6; i++) {
        setTimeout(crearHoja, i * 200);
    }
});
