import DB from '.';
import { Note } from '../models';

const getCollection = async () => {
	const db = await DB.init();
	return db.note;
};

const getAll = async () => {
	const collection = await getCollection();
	return await collection.find().exec();
};

const add = async (note: Note) => {
	const collection = await getCollection();
	return await collection.insert(note);
};

const find = async (id: string) => {
	const collection = await getCollection();
	return await collection.findOne(id).exec().then((value => value));
};

const update = async (note: Note) => {
	const collection = await getCollection();
	return await collection.upsert(note);
};

const remove = async (id) => {
	const document = await find(id);
	return await document.remove();
};


const NoteCollection = {
	getAll,
	add,
	find,
	update,
	remove,
};

export default NoteCollection;