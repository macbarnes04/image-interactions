window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;
  
    const photo = document.getElementById("photo");
    const artwork = document.getElementById("artwork");
  
    photo.style.opacity = 1 - progress;
    artwork.style.opacity = progress;
  });
  