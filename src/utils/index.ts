import { Note, NoteSchema } from '../models';

export const isUndefined = (value: string) => {
	return value === null || typeof value === 'undefined' || value === '';
};

export const mapData = (notes: NoteSchema[]) => {
	return notes.map((i) => {
		return {
			id: i.id,
			note: i.note,
		} as Note;
	});
};

export const mapNote = (note: NoteSchema) => {
	return {
		id: note.id,
		note: note.note
	};
};