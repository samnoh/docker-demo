import { Redis } from './db';
import { fib } from './util';

const redis = Redis.DefaultSetup();

redis.subClient.on('message', (channel, message: string) => {
    const index: number = parseInt(message);

    redis.mainClient.hset('value', message, '' + fib(index));
});

redis.subClient.subscribe('insert', () => {});
