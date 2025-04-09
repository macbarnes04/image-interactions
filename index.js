let currentIndex = 0;
const interactions = document.querySelectorAll(".interaction");

function showInteraction(index) {
    interactions.forEach(el => el.classList.remove("active"));
    const active = interactions[index];
    if (active) {
      active.classList.add("active");
    }

  switch (index) {
    case 0:
      initSlider();
      break;
    case 1:
    //   initMorph();
      break;
    case 2:
      initSpotlight();
      break;
    case 3:
      initHoverReveal();
      break;
    case 4:
      initFrameInFrame();
      break;
  }
  
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % interactions.length;
  showInteraction(currentIndex);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + interactions.length) % interactions.length;
  showInteraction(currentIndex);
});

// Initialize the first one
showInteraction(currentIndex);

function initSlider() {
    const container = document.querySelector(".slider-container");
    if (!container) return;
  
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
  
    handle.onmousedown = () => isDragging = true;
    window.onmouseup = () => isDragging = false;
    window.onmousemove = (e) => isDragging && updateSlider(e.clientX);
  
    handle.ontouchstart = () => isDragging = true;
    window.ontouchend = () => isDragging = false;
    window.ontouchmove = (e) => isDragging && updateSlider(e.touches[0].clientX);
  }

  function initMorph() {
    const container = document.querySelector(".morph-container");
    if (!container) return;
  
    const photo = container.querySelector(".morph-photo");
    const art = container.querySelector(".morph-art");
  
    if (!photo || !art) {
      console.warn("Morph image elements not found.");
      return;
    }
  
    function updateFade() {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      const progress = Math.min(Math.max(1 - rect.top / windowHeight, 0), 1);
  
      photo.style.opacity = 1 - progress;
      art.style.opacity = progress;
      console.log("Scroll progress:", progress); // add this
    }
  
    window.addEventListener("scroll", updateFade);
    updateFade(); // run once
  }
  
  

  function initSpotlight() {
    const spotlight = document.querySelector(".spotlight-container");
    if (!spotlight) return;
  
    const revealImg = spotlight.querySelector(".spotlight-art");
  
    spotlight.onmousemove = (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      revealImg.style.clipPath = `circle(100px at ${x}px ${y}px)`;
    };
  
    spotlight.onmouseleave = () => {
      revealImg.style.clipPath = `circle(0px at 0 0)`;
    };
  }

  function initFrameInFrame() {
    const container = document.querySelector(".frame-frame-container");
    if (!container) return;
  
    const base = container.querySelector(".frame-base");
    const overlay = container.querySelector(".frame-overlay");
    const overlayImg = container.querySelector(".overlay-image");
    const baseImg = container.querySelector(".base-image");
  
    if (!base || !overlay || !overlayImg || !baseImg) return;
  
    overlay.style.display = "block"; // enable when shown
  
    base.onmousemove = (e) => {
      const rect = base.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const overlaySize = 150;
  
      overlay.style.left = `${x - overlaySize / 2}px`;
      overlay.style.top = `${y - overlaySize / 2}px`;
  
      const scaleX = overlayImg.naturalWidth / baseImg.clientWidth;
      const scaleY = overlayImg.naturalHeight / baseImg.clientHeight;
  
      overlayImg.style.left = `${-x * scaleX + overlaySize / 2}px`;
      overlayImg.style.top = `${-y * scaleY + overlaySize / 2}px`;
    };
  
    base.onmouseleave = () => {
      overlay.style.display = "none";
    };
  
    base.onmouseenter = () => {
      overlay.style.display = "block";
    };
  }
  
  function initHoverReveal() {
    const container = document.querySelector(".hover-reveal-container");
    if (!container) return;
  
    const wrapper = container.querySelector(".hover-wrapper");
    const overlay = container.querySelector(".hover-overlay");
  
    wrapper.onmousemove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      overlay.style.clipPath = `circle(100px at ${x}px ${y}px)`;
    };
  
    wrapper.onmouseleave = () => {
      overlay.style.clipPath = `circle(0px at 50% 50%)`;
    };
  }
  
    