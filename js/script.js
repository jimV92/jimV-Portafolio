document.addEventListener('DOMContentLoaded', function() {
    const inner = document.querySelector('.carousel-inner');
    const firstIcon = inner.querySelector('.icon:first-child');
    inner.appendChild(firstIcon.cloneNode(true)); // Clona el primer ítem al final para un desplazamiento fluido
});
