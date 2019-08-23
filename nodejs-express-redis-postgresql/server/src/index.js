import express from 'express';
import cors from 'cors';

import './models/pgSetup';
import './models/redisSetup';

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('Listening on', app.get('port'));
});
