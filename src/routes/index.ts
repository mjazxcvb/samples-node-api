import express from 'express';
import Controller from '../controller';
import Middleware from '../middleware';
const app = express();

const init = () => {
	return [
		app.get('/notes', Controller.getAll),
		app.get('/note/:id', Middleware.id, Controller.get),
		app.put('/note/:id', Middleware.id, Controller.put),
		app.post('/notes', Middleware.post, Controller.post),
		app.delete('/note/:id', Middleware.id, Controller.remove),
	];
};


const Routes = {
	init,
};

export default Routes;