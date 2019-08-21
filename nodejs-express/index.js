const express = require('express');

const app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', (req, res) => {
    res.send('Hello World from Docker Container!');
});

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});
