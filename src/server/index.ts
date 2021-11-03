import express from 'express';
import routesProducto from '../routes/producto';
import routesPedido from '../routes/pedido';
import routesReclamo from '../routes/reclamo';
import routesDenuncia from '../routes/denuncia';
import cors from 'cors';
import { dbConnection }  from '../database/config';

// Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "../swaggerOptions";

const specs = swaggerJsDoc(options);

dbConnection()

const server = express();
server.use(express.json());

server.get('/', (_, res) => res.send('be-compras is up!'));
server.use(cors());
server.use('/', routesProducto);
server.use('/', routesPedido);
server.use('/', routesReclamo);
server.use('/', routesDenuncia);
server.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default server;