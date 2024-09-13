const watchBox = document.querySelector(".arrow-center");

class Watch {
    constructor() {
        this.angle = 0;
    }

    secondHand = () => {
        const watchSecondHand = document.createElement("span");
        watchSecondHand.className = "second-hand";

        watchBox.appendChild(watchSecondHand);

        const updateRotation = () => {
            const now = new Date();
            const seconds = now.getSeconds(); //
            this.angle = seconds * 6;

            watchSecondHand.style.transform = `rotate(${this.angle}deg)`;
        };

        setInterval(updateRotation, 1000);
        updateRotation();
    };

    minuteHand = () => {
        const watchMinuteHand = document.createElement("span");
        watchMinuteHand.className = "minute-hand";

        watchBox.appendChild(watchMinuteHand);

        const updateRotation = () => {
            const now = new Date();
            const minutes = now.getMinutes(); //
            this.angle = minutes * 6;

            watchMinuteHand.style.transform = `rotate(${this.angle}deg)`;
        };

        setInterval(updateRotation, 60000);
        updateRotation();
    };

    hoursHand = () => {
        const watchMHoursHand = document.createElement("span");
        watchMHoursHand.className = "hours-hand";

        watchBox.appendChild(watchMHoursHand);

        const updateRotation = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            this.angle = (hours % 12) * 30 + minutes * 0.5;

            watchMHoursHand.style.transform = `rotate(${this.angle}deg)`;
        };

        setInterval(updateRotation, 60000);
        updateRotation();
    };
}

const watch = new Watch();
watch.secondHand();
watch.minuteHand();
watch.hoursHand();