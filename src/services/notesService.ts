import { request } from "./common/client";
import Note from "./dto/note";

export async function getNotes() {
    return request<Note[]>({
        method: 'get',
        url: 'notes'
    })
}

export async function createNote(title: string) {
    return request<Note>({
        method: 'post',
        url: 'notes',
        data: { title }
    })
}

export async function removeNote(id: number) {
    return request<Note>({
        method: 'delete',
        url: 'notes',
        data: { id }
    })
}

export async function editNote(note: Note) {
    return request<Note>({
        method: 'put',
        url: `note/${note.id}`,
        data: { title: note.title }
    })
}