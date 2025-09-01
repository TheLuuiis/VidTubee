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

async function mostrarInfoVideo() {
    const url = document.getElementById("url").value;
    if (!url) {
        alert("Por favor pega un link de YouTube");
        return;
    }
    const infoDiv = document.getElementById("info-video");
    infoDiv.innerHTML = "Cargando información...";
    try {
        const res = await fetch(`/info?url=${encodeURIComponent(url)}`);
        const data = await res.json();
        infoDiv.innerHTML = `
            <h3>${data.title}</h3>
            <img src="${data.thumbnail}" alt="thumbnail" style="max-width:200px;">
            <br>
            <label>Elige calidad:</label>
            <select id="calidad">
                ${data.formats.map(f => `<option value="${f.format_id}">${f.resolution} (${f.quality})</option>`).join('')}
            </select>
            <button onclick="descargarCalidad()">Descargar</button>
        `;
    } catch (err) {
        infoDiv.innerHTML = "No se pudo obtener la información del video.";
    }
}

async function descargarCalidad() {
    const url = document.getElementById("url").value;
    const calidad = document.getElementById("calidad").value;
    window.location.href = `/download/mp4?url=${encodeURIComponent(url)}&quality=${calidad}`;
}

window.mostrarInfoVideo = mostrarInfoVideo;
window.descargarCalidad = descargarCalidad;