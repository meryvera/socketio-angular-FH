import express from 'express';
import Server from './classes/server';
import { SERVER_PORT } from './global/environment';
import { router } from './routes/router';
//import router from './routes/router';
//import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

/* 16. BODYPARSER lo configuramos entes de las rutas y dsps del server*/
  // a partir de express 16, ya no usamos bodyparser, defrente las siguientes 2 lineas:
server.app.use(express.urlencoded({extended:true}));
server.app.use(express.json()); // To parse the incoming requests with JSON payloads

/* 17. CORS */
  // instalamos npm i --save-dev @types/cors 
server.app.use( cors({origin:true, credentials: true})); // con esto cualquier persona accede a nuestro servidor

server.app.use('/', router)

server.start( () => {
  console.log(`Servidor corriendo en el puerto ${SERVER_PORT} =O`)
})