'use strict'
// <    >  =>

const express = require('express');
const ytDlp = require('yt-dlp-exec');
const app = express();
const PORT = 3000;
const { exec } = require('child_process');

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
    const quality = req.query.quality;

    if (!videoURL || !videoURL.startsWith('http')) {
        return res.status(400).send('URL inválida');
    }

    res.header("Content-Disposition", `attachment; filename="video.mp4"`);

    const { spawn } = require('child_process');
    const args = ['-f', quality || 'best', '-o', '-', videoURL];
    const ytProcess = spawn('yt-dlp', args);

    ytProcess.stdout.pipe(res);

    ytProcess.on('error', (err) => {
        res.status(500).send('No se pudo descargar el video.');
        console.error(err);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

/* Aquí vamos a tomar la ruta para tomar la info de la selección de calidad de vídeo */
app.get('/info', async (req, res) => {
    const videoURL = req.query.url;
    if (!videoURL || !videoURL.startsWith('http')) {
        return res.status(400).send('URL inválida');
    }
    exec(`yt-dlp -j "${videoURL}"`, (error, stdout, stderr) => {
        if (error) {
            console.error('Error en /info:', error);
            return res.status(500).send('No se pudo obtener la información del video.');
        }
        try {
            const info = JSON.parse(stdout);
            // Incluye todos los formatos mp4 con video, aunque no tengan audio
            const formats = info.formats
                .filter(f => f.vcodec !== 'none' && f.ext === 'mp4' && f.height)
                .map(f => ({
                    quality: f.format_note,
                    resolution: `${f.height}p`,
                    format_id: f.format_id,
                    hasAudio: f.acodec !== 'none'
                }));
            res.json({
                title: info.title,
                thumbnail: info.thumbnail,
                formats
            });
        } catch (err) {
            console.error('Error parseando JSON:', err);
            res.status(500).send('No se pudo procesar la información del video.');
        }
    });
});