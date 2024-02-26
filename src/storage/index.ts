import { createRxDatabase, addRxPlugin } from 'rxdb';
import { getRxStorageMemory } from 'rxdb/plugins/storage-memory';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { noteSchema } from '../schema';

let instance = null;

const create = async () => {
	addRxPlugin(RxDBDevModePlugin);

	const db = await createRxDatabase({
		name: 'my_db',
		storage: getRxStorageMemory(),
	});

	await db.addCollections({
		note: {
			schema: noteSchema
		}
	});


	if (db) {
		console.log('DB created.');
	}

	return db;
}; 



const DB = {
	init: function() {
		if (instance === null) {
			instance = create();
		}

		return instance;
	}
};

export default DB;