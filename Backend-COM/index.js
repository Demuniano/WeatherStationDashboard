const express = require('express');
const cors = require('cors'); // Importa cors
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
const port = 3000;

// Configura CORS para permitir solicitudes solo desde http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Variable para almacenar los últimos datos recibidos
let latestData = 'No data received yet';

// Configura el puerto serial (ajusta el nombre del puerto y la velocidad de transmisión según corresponda)
const serialPort = new SerialPort({
  path: '/dev/ttyUSB0',  // Reemplaza '/dev/ttyUSB0' con tu puerto serial correcto
  baudRate: 115200
});

const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\n' }));

// Evento que se dispara cuando llegan datos al puerto serial
parser.on('data', data => {
  latestData = data;  // Actualiza los últimos datos recibidos
  console.log(`Datos recibidos: ${data}`);
});

// Ruta HTTP para obtener los últimos datos recibidos
app.get('/data', (req, res) => {
  res.send(latestData);  // Envía los últimos datos recibidos como respuesta
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
