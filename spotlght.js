const spotlight = document.querySelector(".spotlight-art");

document.querySelector(".spotlight-container").addEventListener("mousemove", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  spotlight.style.maskImage = `radial-gradient(circle 100px at ${x}px ${y}px, white 100%, transparent 120%)`;
});
