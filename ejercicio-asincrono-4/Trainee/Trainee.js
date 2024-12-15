document.addEventListener("DOMContentLoaded", () => {
    const hoverItems = document.querySelectorAll(".inicio div"); // Selecciona todos los divs dentro de .inicio
    const inicioContainer = document.querySelector("body");

    hoverItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            // Cambia la imagen de fondo de la sección .inicio
            const imageSrc = item.getAttribute("data-image");
            inicioContainer.style.backgroundImage = `url(${imageSrc})`;
            inicioContainer.style.backgroundSize = "cover";
            inicioContainer.style.backgroundPosition = "center";

            // Reducir opacidad de los demás divs
            hoverItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = "0.4";
                }
            });
        });

        item.addEventListener("mouseleave", () => {
            // Eliminar el fondo de la sección
            inicioContainer.style.backgroundImage = "";

            // Restaurar opacidad de todos los divs
            hoverItems.forEach(otherItem => {
                otherItem.style.opacity = "1";
            });
        });
    });
});
