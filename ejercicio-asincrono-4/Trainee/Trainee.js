document.addEventListener("DOMContentLoaded", () => {
    const hoverItems = document.querySelectorAll(".inicio div");
    const inicioContainer = document.querySelector("body");

    hoverItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            const imageSrc = item.getAttribute("data-image");
            inicioContainer.style.backgroundImage = `url(${imageSrc})`;
            inicioContainer.style.backgroundSize = "cover";
            inicioContainer.style.backgroundPosition = "center";

            hoverItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.style.opacity = "0.4";
                }
            });
        });

        item.addEventListener("mouseleave", () => {
            inicioContainer.style.backgroundImage = "url(img/negro.jpg)";

            hoverItems.forEach(otherItem => {
                otherItem.style.opacity = "1";
            });
        });
    });
});
