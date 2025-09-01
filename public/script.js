'use strict'
// <    >  =>

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const title = document.querySelectorAll('.title');
  const text = document.querySelectorAll('.text');
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector("i");

  themeToggle.addEventListener('click', () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      title.forEach(titleDark => {
        titleDark.style.color = '#fff';
      });

      text.forEach(textDark => {
        textDark.style.color = '#fff';
      });

      icon.classList.remove("bx-moon");
      icon.classList.add("bx-sun");
      icon.style.color = "#fff"; 
    } else {
      title.forEach(titleDark => {
        titleDark.style.color = '#1a1a1a';
      });

      text.forEach(textDark => {
        textDark.style.color = '#1a1a1a';
      });
      icon.classList.remove("bx-sun");
      icon.classList.add("bx-moon");
      icon.style.color = "#1a1a1a";
    }
  });
});


/*import ScrollReveal from "scrollreveal";

ScrollReveal().reveal('.caja', {
  delay: 200,
  distance: '50px',
  origin: 'left',
  duration: 800,
  reset: false
});*/

function download(type) {
  const url = document.getElementById("url").value;
  if (!url) {
    alert("Por favor pega un link de YouTube");
    return;
  }

  if (type === "mp4") {
    window.location.href = `/download/mp4?url=${encodeURIComponent(url)}`;
  } else if (type === "mp3") {
    window.location.href = `/download/mp3?url=${encodeURIComponent(url)}`;
  }
}

window.download = download;

