import express from 'express';
import mongoose from 'mongoose';
import { envs } from './config/index.js';
import bookRouter from './routes/book.routes.js';
import bodyParser from 'body-parser';

const app = express();
const port = envs.PORT || 3000;

//conexión a la base de datos
mongoose.connect(envs.MONGO_URL, { dbName: envs.DB_NAME });
const db = mongoose.connection;

//Middleware
app.use(express.json());
app.use(bodyParser.json());

//Rutas
app.use('/books', bookRouter);

//Inicio del servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;