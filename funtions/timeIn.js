document.addEventListener('DOMContentLoaded', () => {
    const memoryPoints = document.querySelectorAll('.memory-point');
    const memoryDetails = document.getElementById('memory-details');
    const memoryImage = document.getElementById('memory-image');
    const memoryDescription = document.getElementById('memory-description');
    const closeDetailsButton = document.getElementById('close-details');

    memoryPoints.forEach(point => {
        point.addEventListener('click', () => {
            const fecha = point.dataset.fecha;
            const descripcion = point.dataset.descripcion;
            const imagenSrc = point.dataset.imagen;

            memoryImage.src = imagenSrc;
            memoryImage.alt = `Recuerdo del ${fecha}`;
            memoryDescription.textContent = descripcion;
            memoryDetails.classList.remove('hidden');
        });
    });

    closeDetailsButton.addEventListener('click', () => {
        memoryDetails.classList.add('hidden');
    });

    // Opcional: Cerrar la ventana de detalles al hacer clic fuera de ella
    window.addEventListener('click', (event) => {
        if (event.target === memoryDetails) {
            memoryDetails.classList.add('hidden');
        }
    });
});