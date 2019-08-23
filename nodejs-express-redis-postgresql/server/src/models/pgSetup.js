import { Pool } from 'pg';

import { pgUser, pgHost, pgDatabase, pgPassword, pgPort } from '../util/keys';

export const client = new Pool({
    user: pgUser,
    host: pgHost,
    database: pgDatabase,
    password: pgPassword,
    port: pgPort
});

pgClient.on('error', () => console.log('Lost PG connection'));

pgClient.query('CREATE TABLE IF NOT EXISTS values (number INT)').catch(err => console.log(err));
