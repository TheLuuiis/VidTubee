<h1> App - VidTubee</h1>
<img width="1917" height="905" alt="VidTubee" src="https://github.com/user-attachments/assets/d15927f9-e80b-47ac-99cb-0fc3576acb7e" />


<h1>VidTubee</h1>

VidTubee es una aplicación web que permite descargar videos y audios de YouTube de forma rápida, sencilla y gratuita, directamente desde tu navegador.........

<h1>Características</h1>

- Descarga videos de YouTube en formato MP4....
- Descarga audios de YouTube en formato MP3....
- Interfaz moderna y responsiva....
- Sin anuncios ni registros.....
- Compatible con calidad hasta 4K....
- Funciona en computadoras y dispositivos móviles.....

<h1>Instalación</h1>

1. **Clona el repositorio:**
   ```bash...
   git clone https://github.com/tuusuario/vidtubee.git
   cd vidtubee
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Instala Python (requisito para descargar videos):**
   - Descarga desde [python.org](https://www.python.org/downloads/windows/)
   - Durante la instalación, marca la opción "Add Python to PATH".

4. **Instala yt-dlp (opcional, pero recomendado):**
   ```bash
   pip install yt-dlp
   ```

## Uso

1. **Inicia el servidor:**
   ```bash
   npm run start
   ```
2. **Abre tu navegador y visita:**
   ```
   http://localhost:3000
   ```

3. **Pega el enlace de YouTube y descarga el video o audio.**

## Estructura del proyecto.

```
VidTubee/
│
├── public/
│   ├── index.html      # Interfaz principal
│   ├── style.css       # Estilos personalizados
│   └── script.js       # Lógica del frontend
│
├── server.js           # Servidor Express y rutas de descarga
├── package.json        # Configuración de dependencias
└── README.md           # Documentación del proyecto
```

## Tecnologías utilizadas

- Node.js
- Express
- yt-dlp-exec (requiere Python y yt-dlp)
- HTML, CSS, JavaScript

## Notas importantes

- El proyecto utiliza la librería `yt-dlp-exec` para descargar videos y audios. Esta librería requiere tener Python instalado en el sistema.
- Si tienes problemas con la descarga, asegúrate de tener Python y yt-dlp correctamente instalados y en el PATH.

## Licencia

Este proyecto se distribuye bajo la licencia MIT.

---

**¡Gracias por usar VidTubee! Si tienes sugerencias o encuentras errores, abre un issue en el repositorio.
