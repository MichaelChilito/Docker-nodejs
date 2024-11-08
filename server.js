const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor activo en http://localhost:${port}`);
});
