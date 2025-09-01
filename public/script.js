'use strict'
// <    >  =>

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