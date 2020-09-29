import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import './entities/typeorm';
import './injections';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('🌐️ Server started on port 3000!');
});
