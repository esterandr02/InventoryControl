import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import 'dotenv/config';

import { errors } from 'celebrate';

import './entities/typeorm';
import './injections';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333, () => {
    console.log('🌐️ Server started on port 3000!');
});
