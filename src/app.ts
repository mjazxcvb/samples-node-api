import express from 'express';
const app = express();
const port = 3000;

import Routes from  './routes';
import bodyParser from 'body-parser';
import DB from './storage';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Routes.init());
app.get('/', (_req, res) => {
	res.send('Hello World!');
});

DB.init();

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
