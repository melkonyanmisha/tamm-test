import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import cookie from 'cookie-parser';
import routes from './api/api.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(helmet());
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use('/api/v1', routes);
app.use(errorMiddleware);

export default app;
