import Handler from '../handler';
import { v4 as uuid } from 'uuid';
import NoteCollection from '../storage/notes';
import { mapData, mapNote } from '../utils';

const getAll = async (_req, res) => {
	const findAll = await NoteCollection.getAll();
	const notes = mapData(findAll);

	res.status(200);
	res.send({
		data: notes,
		code: 200,
	});
};

const post = async (req, res) => {
	const note = req?.body?.note;
	const id = uuid();

	const data = {
		id,
		note,
	};

	await NoteCollection.add(data);

	res.status(201);
	res.send(Handler.message('Successfully saved.', 201));
};

const get = async (req, res) => {
	const id = req?.params?.id;
	try {
		const note = await NoteCollection.find(id);
		res.status(200);
		res.send({
			data: mapNote(note._data),
			code: 200,
		});
	} catch (e) {
		res.status(404);
		res.send(Handler.message('Note not found', 404));
	}
};

const put = async (req, res) => {
	const id = req?.params?.id;
	const noteValue = req.body.note;
	try {
		const note = await NoteCollection.find(id);
		const noteId = note._data.id;

		await NoteCollection.update({ id: noteId, note: noteValue });

		res.status(200);
		res.send(Handler.message('Successfully updated.', 200));

	} catch (e) {
		res.status(404);
		res.send(Handler.message('Cannot edit: Note not found', 404));
	}
};

const remove = async (req, res) => {
	const id = req?.params?.id;
	try {
		await NoteCollection.remove(id);
		res.status(200);
		res.send({
			code: 200,
		});
	} catch (e) {
		res.status(404);
		res.send(Handler.message('Note not found', 404));
	}
};

const Controller = {
	getAll,
	get,
	post,
	put,
	remove,
};


export default Controller;