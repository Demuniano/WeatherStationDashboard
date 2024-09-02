const express = require('express');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const app = express();
const port = 3000;  // Puerto para el servidor HTTP

// Configura el puerto serial (ajusta el nombre del puerto y la velocidad de transmisión según corresponda)
const serialPort = new SerialPort('COM3', { // Reemplaza 'COM3' con tu puerto serial
  baudRate: 115200
});

const parser = serialPort.pipe(new Readline({ delimiter: '\n' }));

// Evento que se dispara cuando llegan datos al puerto serial
parser.on('data', data => {
  console.log(`Datos recibidos: ${data}`);
  // Puedes procesar los datos aquí, almacenarlos, enviarlos a una base de datos, etc.
});

// Ruta HTTP para obtener los últimos datos recibidos
app.get('/data', (req, res) => {
  res.send('Aquí podrías devolver los datos más recientes');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
