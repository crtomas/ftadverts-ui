'use strict';

const express = require('express');

const PORT = 3002;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static('public'));

app.use('/ftadvert-wcjs', (req, res) => {
	res.sendFile('./public/ft-advert.js', { root : __dirname});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);