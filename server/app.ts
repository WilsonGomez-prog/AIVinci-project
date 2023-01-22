import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import apiRouter from './api/api';
import connectDB from './mongodb/connect';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

app.use('/api', apiRouter);

const port = 5000;

app.get('/', (req, res, next) => {
    res.send("Hello from AI Vinci!");
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL!);
        app.listen(port, () => {
            console.log('Server listening on port ' + port);
        });
    } catch (error) {
        console.log(error);
    }
}

startServer();