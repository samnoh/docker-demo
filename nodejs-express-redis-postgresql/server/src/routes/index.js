import express from 'express';

import { pgClient } from '../models/pgSetup';
import { redisClient, redisPublisher } from '../models/redisSetup';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/values/all', async (req, res) => {
    const values = await pgClient.query('SELECT * from values');

    res.send(values.rows);
});

router.get('/values/current', async (req, res) => {
    const values = await redisClient.hgetallAsync('values');

    res.send(values);
});

router.post('/values', async (req, res) => {
    const { index } = req.body;

    if (parseInt(index) > 40) {
        return res.status(422).send('Index too high');
    }

    redisClient.hset('values', index, 'Nothing yet!');
    redisPublisher.publish('insert', index);
    await pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

    res.send({ working: true });
});

export default router;
