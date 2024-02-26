import Handler from '../handler';
import { isUndefined } from '../utils';

const id = function (req, res, next) {
	const id = req.params.id;

	if (isUndefined(id)) {
		res.status(400);
		res.send(Handler.message('Something went wrong.', 400));
		return;
	}

	next();
};

const post = function (req, res, next) {
	const note = req.body.note;

	if (isUndefined(note)) {
		res.status(400);
		res.send(Handler.message('Note cannot be empty', 400));
		return;
	}

	next();
};

const Middleware = {
	id,
	post,
};

export default Middleware;