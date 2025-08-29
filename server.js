'use strict'
// <    >  =>

const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const PORT = 3000;

// Visualizamos la web en tiempo real
app.use(express.static('public'));

// Permitimos el middleware al front
const cors = require('cors');
app.use(cors());

// Creamos la ruta principal
app.get('/', (req, res) => {
    res.send('Servidor funcionando!!!!');
});

// Ruta para descargar los videos de Youtube
app.get('/download', async (req, res) => {
    const videoURL = req.query.url;

    if (!ytdl.validateURL(videoURL)) {
        return res.status(400).send('URL inválida');
    };

    const info = await ytdl.getInfo(videoURL);
    const title = info.videoDetails.title.replace(/[^a-zA-Z0-9]/g, "_");

    res.header("Content-Disposition", `attachment; filename="${title}.mp4"`);

    ytdl(videoURL, { format: "mp4" }).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});