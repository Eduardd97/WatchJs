const watchBoxSecomndMarker = document.querySelector("#watch");

const radius = 135; // Радиус, где будут располагаться маркеры
const centerX = 148; // Центр по оси X (радиус контейнера)
const centerY = 140;

const createSecondMarkers = () => {
    for (let i = 0; i < 60; i++) {
        const angle = i * 6;

        const x = centerX + radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = centerY + radius * Math.sin((angle - 90) * (Math.PI / 180));

        const marker = document.createElement("span");
        marker.classList.add("second-marker");

        marker.style.left = `${x}px`;
        marker.style.top = `${y}px`;

        marker.style.transform = `rotate(${angle}deg)`;

        watchBoxSecomndMarker.appendChild(marker);
    }
};

createSecondMarkers();

const hourMarkers = () => {
    for (let i = 0; i < 60; i++) {
        const angle = (i % 12) * 30;

        const x = centerX + radius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = centerY + radius * Math.sin((angle - 90) * (Math.PI / 180));

        const marker = document.createElement("span");
        marker.classList.add("hour-markers");

        marker.style.left = `${x}px`;
        marker.style.top = `${y}px`;

        marker.style.transform = `rotate(${angle}deg)`;

        watchBoxSecomndMarker.appendChild(marker);
    }
};

hourMarkers();