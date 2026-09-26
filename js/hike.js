const hikeDuration = document.getElementById("hike-duration");
const startHikeButton = document.getElementById("start-hike-button");
const hikeSection = document.getElementById("hike");

let seconds = 0;

startHikeButton.addEventListener( "click", () => {

    // Show Hike section
    hikeSection.classList.add("active");
      // Cacher les autres sections
    document.querySelectorAll(".app-section").forEach((section) => {
        if (section !== hikeSection) {
            section.classList.remove("active");
        }
    });

   // Démarrer le chrono
    setInterval(() => {
        seconds++;

        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        hikeDuration.textContent =
            `${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(remainingSeconds).padStart(2, "0")}`;

    }, 1000);

});  




