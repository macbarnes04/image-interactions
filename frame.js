const hoverImg = document.querySelector(".frame-hover-container .frame-hover");

document.querySelector(".frame-hover-container").addEventListener("mousemove", (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  hoverImg.style.clipPath = `circle(100px at ${x}px ${y}px)`;
});
