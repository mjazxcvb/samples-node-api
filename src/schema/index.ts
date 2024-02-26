export const noteSchema = {
	title: 'note schema',
	version: 0,              
	description: 'notes',
	primaryKey: 'id',
	type: 'object',
	properties: {
		id: {
			type: 'string',
			maxLength: 100
		},
		note: {
			type: 'string',
		},
	},
	required: ['note'],
};
