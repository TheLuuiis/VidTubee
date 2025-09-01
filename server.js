'use strict'
// <    >  =>

const express = require('express');
const ytDlp = require('yt-dlp-exec');
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
app.get('/download/mp4', async (req, res) => {
    const videoURL = req.query.url;

    if (!videoURL || !videoURL.startsWith('http')) {
        return res.status(400).send('URL inválida');
    }

    res.header("Content-Disposition", `attachment; filename="video.mp4"`);

    const ytProcess = ytDlp.exec(videoURL, {
        output: '-',
        format: 'mp4',
        restrictFilenames: true,
        quiet: true,
    });

    ytProcess.stdout.pipe(res);

    ytProcess.on('error', (err) => {
        res.status(500).send('No se pudo descargar el video.');
        console.error(err);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});