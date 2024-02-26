export interface Note {
    id: string;
    note: string;
}

export interface NoteSchema {
        id: string,
        note: string,
        _meta: {
            lwt: number
        },
        _deleted: boolean,
        _attachments: object,
        _rev: string;
}