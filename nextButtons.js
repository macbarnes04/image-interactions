let currentIndex = 0;
const interactions = document.querySelectorAll(".interaction");

function showInteraction(index) {
    interactions.forEach((el, i) => {
        el.classList.toggle("active", i === index);
    });
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % interactions.length;
    showInteraction(currentIndex);
});

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + interactions.length) % interactions.length;
    showInteraction(currentIndex);
});

// Initial show
showInteraction(currentIndex);