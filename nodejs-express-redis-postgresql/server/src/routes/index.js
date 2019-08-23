import express from 'express';

import * as pg from '../models/pgSetup';
import * as redis from '../models/redisSetup';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/values/all', async (req, res) => {
    const values = await pg.client.query('SELECT * from values');

    res.send(values.rows);
});

router.get('/values/current', async (req, res) => {
    const values = await redis.client.hgetallAsync('values');

    res.send(values);
});

router.post('/values', async (req, res) => {
    const { index } = req.body;

    if (parseInt(index) > 40) {
        return res.status(422).send('Index too high');
    }

    redis.client.hset('values', index, 'Nothing yet!');
    redis.publisher.publish('insert', index);

    await pg.client.query('INSERT INTO values(number) VALUES($1)', [index]);

    res.send({ working: true });
});

export default router;
