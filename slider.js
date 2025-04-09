
// Slider drag functionality (for first interaction)
const container = document.querySelector(".slider-container");
const rightImg = container.querySelector(".image-right");
const handle = container.querySelector(".slider-handle");

let isDragging = false;

const updateSlider = (x) => {
    const rect = container.getBoundingClientRect();
    const offsetX = x - rect.left;
    const percent = Math.max(0, Math.min(offsetX / rect.width, 1)) * 100;

    rightImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    handle.style.left = `${percent}%`;
};

handle.addEventListener("mousedown", () => {
    isDragging = true;
});

window.addEventListener("mouseup", () => {
    isDragging = false;
});

window.addEventListener("mousemove", (e) => {
    if (isDragging) {
        updateSlider(e.clientX);
    }
});

// Touch support
handle.addEventListener("touchstart", () => {
    isDragging = true;
}, { passive: true });

window.addEventListener("touchend", () => {
    isDragging = false;
});

window.addEventListener("touchmove", (e) => {
    if (isDragging) {
        updateSlider(e.touches[0].clientX);
    }
}, { passive: true });