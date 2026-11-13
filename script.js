document.addEventListener('DOMContentLoaded', () => {
    const rig = document.getElementById('pandaRig');
    const cuerpo = document.getElementById('cuerpoPanda');
    const hojasContenedor = document.getElementById('hojas');
    const emojisHoja = ['🍃', '🎋', '🌿'];

    // Al hacer clic, el panda da un saltito de alegría
    rig.addEventListener('click', () => {
        cuerpo.style.transform = 'scale(1.15) translateY(-22px) rotate(-6deg)';
        setTimeout(() => {
            cuerpo.style.transform = '';
        }, 300);
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
    for (let i = 0; i < 6; i++) {
        setTimeout(crearHoja, i * 200);
    }
});
